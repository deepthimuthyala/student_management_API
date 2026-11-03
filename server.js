const express = require("express");

const app = express();

// Middleware to read JSON body
app.use(express.json());


// Student Routes
const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);



// Function 1: Greetings
function sayHello(name) {

    return "Hi " + name;

}



// Function 2: Addition
function addition(x, y) {

    console.log("x value:", x);

    console.log("y value:", y);

    const sum = x + y;

    return sum;

}



// POST API for Addition
app.post("/add", (req, res) => {

    const x = req.body.x;

    const y = req.body.y;

    const result = addition(x, y);

    res.send("Sum is: " + result);

});



// GET API for Greetings
app.get("/greetings/:name", (req, res) => {

    console.log(req.params);

    const inputName = req.params.name;

    const result = sayHello(inputName);

    res.send(result);

});



// Start Server
app.listen(3000, () => {

    console.log("Server running on port 3000");

});
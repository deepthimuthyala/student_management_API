const express = require("express");

const router = express.Router();

const students = require("../data/students");

//GET METHOD
router.get("/", (req, res) => {

    res.json(students);
});
//GET BY ID
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    res.json(student);

});




//POST METHOD
router.post("/", (req, res) => {

    const { name, email, course } = req.body;

    const newStudent = {

        id: students.length + 1,

        name: name,

        email: email,

        course: course

    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });

});

//PUT METHOD
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    student.name = req.body.name || student.name;

    student.email = req.body.email || student.email;

    student.course = req.body.course || student.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });

});

 //DELETE METHOD

router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {

        return res.status(404).json({
            message: "Student not found"
        });

    }

    students.splice(index, 1);

    res.json({

        message: "Student deleted successfully"
    });

});

module.exports = router;

//sample
//router.get("/", (req, res) => {
//    res.send(DEEPTHI);
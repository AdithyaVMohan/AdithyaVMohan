const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.log("MongoDB Connection Failed");
    console.log(err.message);
});

const Subject = require("./models/Subject");
const Student = require("./models/Student");


function getRemarks(grade) {
    return grade >= 75 ? "PASS" : "FAIL";
}


app.post("/subjects", async (req, res) => {
    const subject = await Subject.create(req.body);
    res.json(subject);
});


app.get("/subjects", async (req, res) => {
    const subjects = await Subject.find();
    res.json(subjects);
});


app.post("/students", async (req, res) => {
    const { studentName, subjectKey, grade } = req.body;
    const remarks = getRemarks(grade);
    const existing = await Student.findOne({
        studentName: studentName.trim(),
        subjectKey
    });
    if (existing) {
        existing.grade = grade;
        existing.remarks = remarks;
        await existing.save();
        return res.json({
            message: "Updated",
            data: existing
        });
    }
    const student = await Student.create({
        studentName: studentName.trim(),
        subjectKey,
        grade,
        remarks
    });
    res.json({
        message: "Created",
        data: student
    });
});


app.get("/students", async (req, res) => {
    const { search = "", remarks = "" } = req.query;
    let query = {};
    if (search) {
        query.studentName = {
            $regex: search,
            $options: "i"
        };
    }
    if (remarks) {
        query.remarks = remarks;
    }
    const students = await Student.find(query)
        .populate("subjectKey");

    res.json(students);
});


app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});


app.put("/students/:id", async (req, res) => {

    const { studentName, subjectKey, grade } = req.body;

    const updated = await Student.findByIdAndUpdate(
        req.params.id,
        {
            studentName: studentName.trim(),
            subjectKey,
            grade,
            remarks: getRemarks(grade)
        },
        { new: true }
    );

    res.json(updated);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
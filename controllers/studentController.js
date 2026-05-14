const Student = require("../models/Student");

function getRemarks(grade) {
    return grade >= 75 ? "PASS" : "FAIL";
}

const createStudent = async (req, res) => {
    try {
        const { studentName, subjectKey, grade } = req.body;
        if (!studentName || !subjectKey || grade === undefined) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        if (grade < 0 || grade > 100) {
            return res.status(400).json({
                message: "Grade must be between 0 and 100"
            });
        }
        const existing = await Student.findOne({
            studentName: studentName.trim().toLowerCase(),
            subjectKey
        });
        if (existing) {
            existing.grade = grade;
            existing.remarks = getRemarks(grade);
            await existing.save();
            return res.json({
                message: "Updated",
                data: existing
            });
        }
        const student = await Student.create({
            studentName: studentName.trim().toLowerCase(),
            subjectKey,
            grade,
            remarks: getRemarks(grade)
        });
        res.json({
            message: "Created",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getStudents = async (req, res) => {
    try {
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
        const students = await Student.find(query).populate("subjectKey"); 
        res.json(students);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { studentName, subjectKey, grade } = req.body;
        if (grade < 0 || grade > 100) {
            return res.status(400).json({
                message: "Grade must be between 0 and 100"
            });
        }
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            {
                studentName: studentName.trim().toLowerCase(),
                subjectKey,
                grade,
                remarks: getRemarks(grade)
            },
            { new: true }
        ).populate("subjectKey");
        if (!updated) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({
            message: "Deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    subjectKey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    grade: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    remarks: {
        type: String
    }
});

StudentSchema.index(
    { studentName: 1, subjectKey: 1 },
    { unique: true }
);

module.exports = mongoose.model("Student", StudentSchema);
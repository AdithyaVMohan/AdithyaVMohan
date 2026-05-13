const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    studentName: String,
    subjectKey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    },
    grade: Number,
    remarks: String
});

StudentSchema.index(
    { studentName: 1, subjectKey: 1 },
    { unique: true }
);

module.exports = mongoose.model("Student", StudentSchema);
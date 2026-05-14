const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    subjectName: {
    type: String,
    required: [true, "Subject name is required"],
    unique: true,
    trim: true,
    minlength: 2
}
});

module.exports = mongoose.model("Subject", SubjectSchema);
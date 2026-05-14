const Subject = require("../models/Subject");

const createSubject = async (req, res) => {
    try {
        const { subjectName } = req.body;
        if (!subjectName) {
            return res.status(400).json({
                message: "Subject name is required"
            });
        }
        const subject = new Subject({ subjectName });
        const saved = await subject.save();
        res.status(201).json(saved);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Subject already exists"
            });
        }
        res.status(500).json({
            message: error.message
        });
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if (!subject) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }
        res.json(subject);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateSubject = async (req, res) => {
    try {
        const { subjectName } = req.body;
        const updated = await Subject.findByIdAndUpdate(
            req.params.id,
            { subjectName },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const deleteSubject = async (req, res) => {
    try {
        const deleted = await Subject.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }
        res.json({
            message: "Subject deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createSubject,
    getSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};
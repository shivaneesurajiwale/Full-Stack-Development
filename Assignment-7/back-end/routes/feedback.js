const express = require('express');
const router = express.Router();

const CourseFeedback = require('../models/CourseFeedback');
const CollegeFeedback = require('../models/CollegeFeedback');


// 🔥 COURSE FEEDBACK
router.post('/course', async (req, res) => {

    console.log("Course BODY:", req.body); // ✅ DEBUG

    try {
        const { prn, courseId, courseName, faculty, rating, feedback } = req.body;

        if (!prn || !courseId || !courseName || !faculty || !rating) {
            return res.status(400).json({ message: 'Missing required course feedback fields' });
        }

        const savedFeedback = new CourseFeedback({
            prn,
            courseId,
            courseName,
            faculty,
            rating,
            feedback
        });

        await savedFeedback.save();

        console.log("Course saved:", savedFeedback); // ✅ DEBUG

        res.status(201).json({ message: 'Course feedback saved' });

    } catch (err) {
        console.error("Course Error:", err.message); // ✅ DEBUG
        res.status(500).json({ message: err.message });
    }
});


// 🔥 COLLEGE FEEDBACK
router.post('/college', async (req, res) => {

    console.log("College BODY:", req.body); // ✅ DEBUG (VERY IMPORTANT)

    try {
        const { prn, issueType, comments } = req.body;

        if (!prn || !issueType || !comments) {
            return res.status(400).json({ message: 'Missing required college feedback fields' });
        }

        const savedFeedback = new CollegeFeedback({
            prn,
            issueType,
            comments
        });

        await savedFeedback.save();

        console.log("College saved:", savedFeedback); // ✅ DEBUG

        res.status(201).json({ message: 'College feedback saved' });

    } catch (err) {
        console.error("College Error:", err.message); // ✅ DEBUG
        res.status(500).json({ message: err.message });
    }
});


// 🔥 GET COURSE
router.get('/course', async (req, res) => {
    try {
        const data = await CourseFeedback.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// 🔥 GET COLLEGE
router.get('/college', async (req, res) => {
    try {
        const data = await CollegeFeedback.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
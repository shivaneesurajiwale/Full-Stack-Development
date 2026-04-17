const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {

    console.log("Login BODY:", req.body); // 🔥 DEBUG LINE

    try {
        const { prn, password } = req.body;

        // Validation
        if (!prn || !password) {
            return res.status(400).json({ message: 'PRN and password are required' });
        }

        // Check if user exists
        let user = await User.findOne({ prn });

        // If not, create new user
        if (!user) {
            user = new User({ prn, password });
            await user.save();
            console.log("New user created:", user); // 🔥 DEBUG
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Success
        res.json({ message: 'Login successful', prn });

    } catch (err) {
        console.error("Login Error:", err.message); // 🔥 DEBUG
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Sample post-call analysis storage
let postCallData = [];

// API to log post-call data
router.post('/', (req, res) => {
    const { userId, conversationSummary, sentimentScore, resolutionStatus } = req.body;

    if (!userId || !conversationSummary || sentimentScore === undefined || !resolutionStatus) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Store conversation details
    postCallData.push({ userId, conversationSummary, sentimentScore, resolutionStatus });

    res.status(201).json({ message: "Post-call data logged successfully", data: postCallData });
});

// API to fetch logged post-call data
router.get('/', (req, res) => {
    res.status(200).json({ postCallData });
});

module.exports = router;

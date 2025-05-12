const express = require('express');
const router = express.Router();

// Define conversation states
const states = {
    GREETING: "greeting_state",
    BOOKING: "booking_state",
    CONFIRMATION: "confirmation_state",
    CANCELLATION: "cancellation_state",
    FAQ: "faq_state"
};

// Function to determine next state based on user input
const getNextState = (input) => {
    input = input.toLowerCase();

    if (input.includes("book") || input.includes("reservation")) {
        return states.BOOKING;
    } else if (input.includes("confirm")) {
        return states.CONFIRMATION;
    } else if (input.includes("cancel")) {
        return states.CANCELLATION;
    } else if (input.includes("menu") || input.includes("policy")) {
        return states.FAQ;
    } else {
        return states.GREETING; // Default state
    }
};

// API to determine next state
router.post('/nextState', (req, res) => {
    const { userInput } = req.body;

    if (!userInput) {
        return res.status(400).json({ message: "User input is required" });
    }

    const nextState = getNextState(userInput);
    res.status(200).json({ nextState });
});

module.exports = router;

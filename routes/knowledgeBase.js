const express = require('express');
const router = express.Router();

// Enhanced structured knowledge base
const knowledgeBase = {
    "Delhi": {
        "bookingProcess": "Reservations can be made online or by calling the restaurant directly.",
        "cancellationPolicy": "Cancellations must be done 24 hours in advance.",
        "menuHighlights": "Signature grills, seafood specials, and unlimited buffet.",
        "pricingDetails": "Weekdays: ₹999 per person, Weekends: ₹1199 per person.",
        "operationalHours": "Monday-Sunday: 12 PM - 11 PM"
    },
    "Bangalore": {
        "bookingProcess": "Walk-ins are accepted, but online reservations are recommended.",
        "cancellationPolicy": "Cancellations must be done 12 hours before the reserved time.",
        "menuHighlights": "Live BBQ stations, kebabs, and a variety of desserts.",
        "pricingDetails": "Weekdays: ₹899 per person, Weekends: ₹1099 per person.",
        "operationalHours": "Monday-Sunday: 1 PM - 10:30 PM"
    }
};

// API to get FAQs based on property location
router.get('/:location', (req, res) => {
    const { location } = req.params;

    if (!knowledgeBase[location]) {
        return res.status(404).json({ message: "Information for this location is not available." });
    }

    res.status(200).json({ location, data: knowledgeBase[location] });
});

module.exports = router;

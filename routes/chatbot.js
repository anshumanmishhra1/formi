const express = require('express');
const router = express.Router();

// Sample booking storage
let bookings = [];

// API to handle new bookings
router.post('/book', (req, res) => {
    const { userId, name, date, time, guests, location } = req.body;

    if (!userId || !name || !date || !time || !guests || !location) {
        return res.status(400).json({ message: "Missing required booking details" });
    }

    const newBooking = { bookingId: bookings.length + 1, userId, name, date, time, guests, location };
    bookings.push(newBooking);

    res.status(201).json({ message: "Booking confirmed!", data: newBooking });
});

// API to update or cancel a booking
router.put('/update/:bookingId', (req, res) => {
    const { bookingId } = req.params;
    const { date, time, guests, action } = req.body;

    const bookingIndex = bookings.findIndex(b => b.bookingId == bookingId);

    if (bookingIndex === -1) {
        return res.status(404).json({ message: "Booking not found" });
    }

    if (action === "cancel") {
        bookings.splice(bookingIndex, 1);
        return res.status(200).json({ message: "Booking canceled successfully" });
    }

    // Update booking details
    if (date) bookings[bookingIndex].date = date;
    if (time) bookings[bookingIndex].time = time;
    if (guests) bookings[bookingIndex].guests = guests;

    res.status(200).json({ message: "Booking updated successfully", data: bookings[bookingIndex] });
});

// API to retrieve all bookings
router.get('/list', (req, res) => {
    res.status(200).json({ bookings });
});

module.exports = router;

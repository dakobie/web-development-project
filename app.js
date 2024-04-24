// JavaScript source code
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for contacts (replace this with a database in a real-world scenario)
let contacts = [];

// Route to handle contact information submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please provide name, email, and message." });
    }

    const contact = {
        id: contacts.length + 1,
        name,
        email,
        message
    };

    contacts.push(contact);

    res.status(201).json({ message: "Contact information submitted successfully.", contact });
});

// Route to get all contacts
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Assuming you have this server.js or a similar backend file
const express = require('express');
const fs = require('fs');
const app = express();
const port = 10000;

// Middleware to parse JSON body
app.use(express.json());

// Load users from users.json asynchronously
let users = [];
fs.readFile('users.json', (err, data) => {
    if (err) {
        console.error('Failed to load users.json:', err);
    } else {
        try {
            users = JSON.parse(data);
            console.log("Users loaded:", users); // Log the loaded users
        } catch (parseError) {
            console.error('Error parsing users.json:', parseError);
        }
    }
});

// API endpoint to get the users
app.get('/users', (req, res) => {
    res.json(users);  // Respond with the loaded users
});

// Start the server
app.listen(port, () => {
    console.log(`[+] Server running on http://localhost:${port}`);
});

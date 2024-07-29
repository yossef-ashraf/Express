const express = require('express');
const router = express.Router();
const user = require('../app/controllers/user');

console.log(user.users); // Add this line to see what's being imported

// Route for fetching all users
router.get('/', user.users);

module.exports = router;

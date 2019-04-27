const db = require("../models");

module.exports = {
    // Find all users
    findAllUsers: function(req, res) {
        db.User
        // TO DO: fill in code for finding all users
    },
    // Find a specific user
    findUserByID: function(req, res) {
        db.User
        // TO DO: fill in code for finding a specific user
    },
    // Create a new user
    create: function(req, res) {
        db.User
        // TO DO: fill in code for creating a new user
    },
    // Update a user's info
    update: function(req, res) {
        db.User
        // TO DO: fill in code for updating user info
    },
    // Permanently delete user
    delete: function(req, res) {
        db.User
        // TO DO: fill in code for deleting a user
    }
};
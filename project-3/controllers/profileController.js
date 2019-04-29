const db = require("../models");

module.exports = {
    // Find all users
    findAllUsers: function(req, res) {
        db.User
        // TO DO: fill in code for finding all users
        .catch(err => res.status(422).json(err));
    },
    // Find a specific user
    findUserByID: function(req, res) {
        db.User
        // TO DO: fill in code for finding a specific user
        .catch(err => res.status(422).json(err));
    },
    // Create a new user
    create: function(req, res) {
        db.User
        // TO DO: fill in code for creating a new user
        .catch(err => res.status(422).json(err));
    },
    // Update a user's info
    update: function(req, res) {
        db.User
        // TO DO: fill in code for updating user info
        .catch(err => res.status(422).json(err));
    },
    // Permanently delete user
    delete: function(req, res) {
        db.User
        // TO DO: fill in code for deleting a user
        .catch(err => res.status(422).json(err));
    }
};
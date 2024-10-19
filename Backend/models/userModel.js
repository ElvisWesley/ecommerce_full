const pool = require('../config/db');

// Function to find a user by email
const findUserByEmail = (email) => {
  return pool.query('SELECT * FROM users WHERE email = $1', [email]);
};

// Function to create a new user
const createUser = (email, hashedPassword) => {
  return pool.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
    [email, hashedPassword]
  );
};

module.exports = { findUserByEmail, createUser };

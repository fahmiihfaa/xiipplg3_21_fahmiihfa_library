const mysql = require("mysql2/promise"); // Use promise-based MySQL2

// Create a connection pool instead of a single connection
const dbPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: '',
    database: "library",
    waitForConnections: true,
    connectionLimit: 10, // Adjust as needed
    queueLimit: 0
});

module.exports = dbPool; // Export the pool for use in other files

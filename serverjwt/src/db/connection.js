const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '172.20.0.12',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'j_worktask_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;
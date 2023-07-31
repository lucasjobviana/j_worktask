const express = require('express');
const connection = require('./db/connection')


const app = express();
const HTTP_STATUS_OK = 200;

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/works', async (req, res) => {
    const works = await connection.execute('SELECT * FROM people');
    return res.status(HTTP_STATUS_OK).json(works);
});

module.exports = app; 
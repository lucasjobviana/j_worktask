const express = require('express');
const connection = require('./db/connection');
const workRouter = require('./routes/workRouter');
const cors = require('cors');


const app = express();
const HTTP_STATUS_OK = 200;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World Again!' }));

app.get('/tasks', async (req, res) => {
    const [queryResponse] = await connection.execute('SELECT * FROM task');
    console.log(queryResponse)
    const works = queryResponse.map((work) => ({
        id: work.id,
        name: work.name,
        last_name: work.descrition,
    }));
    return res.status(HTTP_STATUS_OK).json(works);
});

app.use(workRouter);

module.exports = app; 
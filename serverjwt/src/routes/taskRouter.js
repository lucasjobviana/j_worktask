const express = require('express');
const connection = require('../db/connection');

const router = express.Router();

const HTTP_STATUS_OK = 200;


router.post('/tasks', async (req, res) => {
    const user = { ...req.body };

    const [queryResponse] = await connection.execute(`
    select * from task t
    where t.id_work = ${user.id}
    `);//CALL getWorkStatisticsById(1);

    console.log('Esssse eh do tasks')
    console.log(queryResponse)
    const works = queryResponse.map((work) => ({
        id: work.id,
        name: work.name,
        descrition: work.descrition,
        idWork: work.id_work,
        idParentTask: work.id_parentTask,

    }));
    return res.status(HTTP_STATUS_OK).json(works);
});

module.exports = router;
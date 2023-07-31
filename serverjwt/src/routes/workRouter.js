const express = require('express');
const connection = require('../db/connection');

const router = express.Router();

const HTTP_STATUS_OK = 200;

router.get('/works', async (req, res) => {
    const [queryResponse] = await connection.execute(`
    SELECT 
        w.id,
        w.name, 
        w.descrition,
        (SELECT COUNT(*) FROM task WHERE id_work = w.id) AS task_count,
        (SELECT COUNT(*) FROM task 
    INNER JOIN 
        _statustask_ st ON st.id_task = task.id
    WHERE 
        id_work = w.id) AS finaly_task_count
    FROM 
        work w
    WHERE
        w.id = 1;
    `);//CALL getWorkStatisticsById(1);

    console.log(queryResponse)
    const works = queryResponse.map((work) => ({
        id: work.id,
        name: work.name,
        descrition: work.descrition,
        taskCount: work.task_count,
        finalyTasksCount: work.finaly_task_count,

    }));
    return res.status(HTTP_STATUS_OK).json(works);
});

module.exports = router;

/*

SELECT 
    w.id,
    w.name,
    w.descrition,
    (SELECT COUNT(*) FROM task WHERE id_work = w.id) AS task_count,
    (SELECT COUNT(*) FROM task 
    INNER JOIN _statustask_ st ON st.id_task = task.id
    WHERE id_work = w.id) AS finaly_task_count
FROM 
    work w
WHERE
    w.id = 1;





*/
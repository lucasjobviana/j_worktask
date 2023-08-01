const express = require('express');
const connection = require('../db/connection');

const router = express.Router();
const invalidTokenMsg = 'Token inválido';
const notFoundTokenMsg = 'Token não encontrado';

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_SERVER_ERROR = 500;

router.get('/works', async (req, res) => {
    //const user = { ...req.body };
    const header = { ...req.headers };
    if (!header.authorization) return res.status(401).json({ message: notFoundTokenMsg });

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
        w.id_user = 1;
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

router.post('/works', async (req, res) => {
    const user = { ...req.body };
    const sql = 'INSERT INTO  work(id_visibility,id_user,name,descrition) values(1,1,?,?)';
    const values = [user.name, user.descrition];
    console.log('post/works/user: ', user);
    console.log('sql', sql, values)

    // Executar a consulta usando o método execute
    const status = await connection.execute(sql, values);

    //const { affectedRows, insertId } = ResultSetHeader;
    console.log(status[0])
    const { insertId, affectedRows } = status[0];
    console.log(insertId)
    //console.log(affectedRows, insertId)

    console.log(status)
    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: insertId });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível adicionar o trabalho, erro interno.' });


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
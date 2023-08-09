const express = require('express');
const connection = require('../db/connection');


const router = express.Router();
const invalidTokenMsg = 'Token inválido';
const notFoundTokenMsg = 'Token não encontrado';

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_SERVER_ERROR = 500;

router.get('/works', async (req, res) => {
    const header = { ...req.headers };
    if (!header.authorization) return res.status(401).json({ message: notFoundTokenMsg });

    const [queryResponse] = await connection.execute(`
    SELECT 
        w.id,
        w.name, 
        w.descrition,
        (SELECT COUNT(*) FROM task WHERE id_work = w.id) AS task_count,
        (SELECT COUNT(*) FROM task 
    WHERE 
        id_work = w.id and checked=4) AS finaly_task_count
    FROM 
        work w
    WHERE
        w.id_user = 1;
    `);//CALL getWorkStatisticsById(1);

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
    const status = await connection.execute(sql, values);
    const { insertId, affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: insertId });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível adicionar o trabalho, erro interno.' });
});

router.put('/works', async (req, res) => {
    const user = { ...req.body };
    const sql = 'UPDATE work w SET w.name = ?, w.descrition = ? WHERE w.id = ?;';
    const values = [user.name, user.descrition, user.id];
    const status = await connection.execute(sql, values);
    const { insertId, affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: user.id });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível editar a tarefa, erro interno.' });
});

router.delete('/works', async (req, res) => {
    const user = { ...req.body };
    const sql = 'delete from work where id = ?;';
    const values = [user.id];
    const status = await connection.execute(sql, values);
    const { affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ affectedRows });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível excluir a work, erro interno.' });
});

module.exports = router;
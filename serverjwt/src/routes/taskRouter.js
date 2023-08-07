const express = require('express');
const connection = require('../db/connection');
const router = express.Router();
const invalidTokenMsg = 'Token inválido';
const notFoundTokenMsg = 'Token não encontrado';

const HTTP_STATUS_OK = 200;

router.get('/tasks', async (req, res) => {
    const header = { ...req.headers };
    if (!header.authorization) return res.status(401).json({ message: notFoundTokenMsg });

    const [queryResponse] = await connection.execute(`
    SELECT
    t.id,
    t.name,
    t.descrition,
    t.id_parentTask,
    t.id_work,
    t.checked
FROM
    task t
INNER JOIN
    work w ON w.id = t.id_work

WHERE
    w.id_user = 1
ORDER BY
    t.id;
    `);//CALL getWorkStatisticsById(1);

    const works = queryResponse.map((work) => ({
        id: work.id,
        name: work.name,
        descrition: work.descrition,
        idWork: work.id_work,
        idParentTask: work.id_parentTask,
        checked: work.checked
    }));
    return res.status(HTTP_STATUS_OK).json(works);
});

router.post('/tasks', async (req, res) => {
    const user = { ...req.body };
    const sql = 'INSERT INTO  task(id_work,name,descrition,id_parentTask) values(?,?,?,?)';
    const values = [user.idWork, user.name, user.descrition, user.idParentTask || null];
    const status = await connection.execute(sql, values);
    const { insertId, affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: insertId });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível adicionar a tarefa, erro interno.' });
});

router.put('/tasks', async (req, res) => {
    const user = { ...req.body };
    const sql = 'UPDATE task t SET t.name = ?,t.id_work = ?,t.id_Assigned_user = ?,t.id_parentTask = ?,descrition = ?,checked=?  WHERE t.id = ?;';
    const values = [user.name, user.idWork, 1, user.idParentTask || null, user.descrition, user.checked, user.id];
    const status = await connection.execute(sql, values);
    const { insertId, affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: user.id });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível editar a tarefa, erro interno.' });
});


router.delete('/tasks', async (req, res) => {
    const user = { ...req.body };
    const sql = 'delete from task where id = ?;';
    const values = [user.id];
    const status = await connection.execute(sql, values);
    const { affectedRows } = status[0];

    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ affectedRows });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível editar a tarefa, erro interno.' });
});


module.exports = router;

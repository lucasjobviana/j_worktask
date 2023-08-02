const express = require('express');
const connection = require('../db/connection');

const router = express.Router();
const invalidTokenMsg = 'Token inválido';
const notFoundTokenMsg = 'Token não encontrado';

const HTTP_STATUS_OK = 200;


router.get('/tasks', async (req, res) => {
    // const user = { ...req.body };
    const header = { ...req.headers };
    if (!header.authorization) return res.status(401).json({ message: notFoundTokenMsg });

    const [queryResponse] = await connection.execute(`
    select t.id,t.name,t.descrition,t.id_parentTask,t.id_work  from task t
    inner join work w on w.id = t.id_work
where w.id_user =1 order by t.id
    `);//CALL getWorkStatisticsById(1);

    console.log('Esssse eh do tasks')
    console.log(queryResponse)
    const works = queryResponse.map((work) => ({
        id: work.id,
        name: work.name,
        descrition: work.descrition,
        idWork: work.id_work,
        idParentTask: work.id_parentTask
    }));
    return res.status(HTTP_STATUS_OK).json(works);
});

router.post('/tasks', async (req, res) => {
    const user = { ...req.body };
    const sql = 'INSERT INTO  task(id_work,name,descrition,id_parentTask) values(?,?,?,?)';
    const values = [user.idWork, user.name, user.descrition, user.idParentTask || ''];
    console.log('post/tasks/user: ', user);
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
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível adicionar a tarefa, erro interno.' });
});

router.put('/tasks', async (req, res) => {
    const user = { ...req.body };
    const sql = 'UPDATE task t SET t.name = ?,t.id_work = ?,t.id_Assigned_user = ?,t.id_parentTask = ?,descrition = ? WHERE t.id = ?;';
    const values = [user.name, user.idWork, 1, user.idParentTask || null, user.descrition, user.id];
    console.log('PUT   /tasks/user: ', user);
    console.log('sql', sql, values)

    // Executar a consulta usando o método execute
    const status = await connection.execute(sql, values);

    //const { affectedRows, insertId } = ResultSetHeader;
    console.log(status[0])
    const { insertId, affectedRows } = status[0];
    console.log(insertId)
    //console.log(affectedRows, insertId)

    console.log('meuidquevouretornar: ', user.id)
    if (affectedRows) return res.status(HTTP_STATUS_OK).json({ id: user.id });
    return res.status(HTTP_STATUS_SERVER_ERROR).json({ msg: 'Não foi possível editar a tarefa, erro interno.' });
});

module.exports = router;
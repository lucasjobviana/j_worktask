const app = require('./app');
const connection = require('./db/connection');

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`API j_worktask está sendo executada na porta ${PORT}`);

    // O código abaixo é para testarmos a comunicação com o MySQL
    const [result] = await connection.execute('select * from work');
    if (result) {
        console.log('MySQL connection OK');
        console.log(result)
    } else {
        console.log('Mysql connection NOT OK')
    }
});
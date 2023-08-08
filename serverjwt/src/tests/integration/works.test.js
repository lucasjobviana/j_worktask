const app = require('../../app');
const sinon = require('sinon');
const connection = require('../../db/connection');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { works, worksDBFormat } = require('../mocks/works');
const { json } = require('express');

chai.use(chaiHttp);
const { expect } = chai;
const selectQuery = `
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
    `

describe('Testando as rotas em /works', function () {
    describe('Testando o método GET em /works', function () {
        beforeEach(function () {
            sinon.stub(connection, 'execute').resolves([worksDBFormat]);
            });
        
        afterEach(function () {
            sinon.restore();
        });

        it('Verifica se o banco de dados foi consultado se token for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/works')
            .set('Authorization', 'tokenaleatorio');
            expect(connection.execute.calledOnce).to.be.equal(true);
        });

        it('Verifica se o banco de dados não foi consultado se token não for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/works')
            expect(connection.execute.calledOnce).not.to.be.equal(true);
        });

        it('Retorna a lista completa de trabalhos se  o token for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/works')
            .set('Authorization', 'tokenaleatorio');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.deep.equal(works);
        });

        it('Retorna um erro se o token for passado incoretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/works')
            expect(response.status).to.be.equal(401);
            expect(response.body).to.be.deep.equal(JSON.parse('{"message":"Token não encontrado"}'));
        });

    });
});
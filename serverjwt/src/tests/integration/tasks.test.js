const app = require('../../app');
const sinon = require('sinon');
const connection = require('../../db/connection');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { tasks, tasksDBFormat } = require('../mocks/tasks');
const { json } = require('express');

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o método GET em /tasks', function () {
    describe('Testando o método GET em /tasks', function () {
        beforeEach(function () {
            sinon.stub(connection, 'execute').resolves([tasksDBFormat]);
          });
        
        afterEach(function () {
        sinon.restore();
        });
    
        it('Verifica se o banco de dados foi consultado se token for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/tasks')
            .set('Authorization', 'tokenaleatorio');
            expect(connection.execute.calledOnce).to.be.equal(true);
        });
    
        it('Verifica se o banco de dados não foi consultado se token não for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/tasks')
            expect(connection.execute.calledOnce).not.to.be.equal(true);
        });
    
        it('Retorna a lista completa de tasks se  o token for passado corretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/tasks')
            .set('Authorization', 'tokenaleatorio');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.deep.equal(tasks);
        });
    
        it('Retorna um erro se o token for passado incoretamente.', async function () {
            const response = await chai
            .request(app) 
            .get('/tasks')
            expect(response.status).to.be.equal(401);
            expect(response.body).to.be.deep.equal(JSON.parse('{"message":"Token não encontrado"}'));
        });
    });
});
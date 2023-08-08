// tests/integration/chocolates.test.js
const app = require('../../app');
const sinon = require('sinon');
const connection = require('../../db/connection');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { works, worksDBFormat } = require('../mocks/works');
const { json } = require('express');

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o método GET em /works', function () {

    beforeEach(function () {
        sinon.stub(connection, 'execute').resolves([worksDBFormat]);
      });
    
    afterEach(function () {
    sinon.restore();
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
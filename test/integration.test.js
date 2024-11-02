javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
const { expect } = chai;

describe('Teste do Servidor', () => {
    it('Deve retornar Hello World na rota GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello World');
                done();
            });
    });

    it('Deve retornar sucesso na rota POST /data', (done) => {
        const data = { key: 'value' };
        chai.request(server)
            .post('/data')
            .send(data)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({ message: 'Success', data });
                done();
            });
    });
});

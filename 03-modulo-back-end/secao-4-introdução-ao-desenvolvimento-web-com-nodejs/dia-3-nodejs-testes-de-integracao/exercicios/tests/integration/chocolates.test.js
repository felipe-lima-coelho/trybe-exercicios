const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    { id: 1, name: 'Lindt & Sprungli' },
    { id: 2, name: 'Ferrero' },
    { id: 3, name: 'Ghirardelli' },
  ],
  chocolates: [
    { id: 1, name: 'Mint Intense', brandId: 1 },
    { id: 2, name: 'White Coconut', brandId: 1 },
    { id: 3, name: 'Mon Chéri', brandId: 2 },
    { id: 4, name: 'Mounds', brandId: 3 },
  ],
});

describe('Testando a API Trybe Chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Usando o método GET "/chocolates/total"', async function () {
    const output = { totalChocolates: 4 };

    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });
});

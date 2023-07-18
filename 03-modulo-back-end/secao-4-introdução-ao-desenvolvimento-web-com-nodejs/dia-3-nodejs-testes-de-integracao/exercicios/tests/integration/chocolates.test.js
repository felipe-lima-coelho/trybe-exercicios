const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const textMintPrettyGood = 'Mint Pretty Good';

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

const mockSendBody = {
  name: textMintPrettyGood,
  brandId: 2,
};

const mockFileUpdated = JSON.stringify({ 
  brands: [
    { id: 1, name: 'Lindt & Sprungli' },
    { id: 2, name: 'Ferrero' },
    { id: 3, name: 'Ghirardelli' },
  ],
  chocolates: [
    { id: 1, name: textMintPrettyGood, brandId: 2 },
    { id: 2, name: 'White Coconut', brandId: 1 },
    { id: 3, name: 'Mon Chéri', brandId: 2 },
    { id: 4, name: 'Mounds', brandId: 3 },
  ],
});

describe('Testando a API Trybe Chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile').resolves(mockFileUpdated);
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

  it('Usando o método GET "/chocolates/search?name=Mo"', async function () {
    const output = [
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai.request(app).get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Usando o método GET "/chocolates/search?name=ZZZ"', async function () {
    const output = [];

    const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal(output);
  });

  it('Usando o método POST "/chocolates/1"', async function () {
    const output = {
      chocolate: { 
        id: 1,
        name: textMintPrettyGood,
        brandId: 2,
      },
    };

    const response = await chai.request(app).put('/chocolates/1').send(mockSendBody);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Usando o método POST "/chocolates/555"', async function () {
    const output = { message: 'chocolate not found' };

    const response = await chai.request(app).put('/chocolates/555').send(mockSendBody);

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal(output);
  });
});

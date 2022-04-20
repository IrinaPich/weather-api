const axios = require('axios');
const { expect } = require('chai');

describe('Weather-api', function () {
    it('should get a capital of Spain Madrid in json data when the value is present', async function () {
        const weather = await axios.get(`http://localhost:5000/spain`);
        expect(weather.data.name).equal('Madrid');  
    });
});

describe('Weather-api', function () {
    it('should get a capital of France Paris in json data when the value is present', async function () {
        const weather = await axios.get(`http://localhost:5000/france`);
        expect(weather.data.name).equal('Paris');  
    });
});


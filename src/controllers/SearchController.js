const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseAsArrayString')

module.exports = {
    async index(request, response){
        //Buscar todos os Devs que estao em um raio de 10km
        //filtrar por tecnologias
        console.log(request.query);
        return response.json({ Dev: [] });
    }
}
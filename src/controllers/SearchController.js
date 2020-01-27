const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseAsArrayString')

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs} = request.query
        //Buscar todos os Devs que estao em um raio de 10km
        //filtrar por tecnologias
        const techsArray = parseStringAsArray(techs);
        
        //https://docs.mongodb.com/manual/reference/operator/query/
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {type: 'Point',
                    coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
               
            },
        });

        return response.json({ devs });
    }
}
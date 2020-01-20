const axios = require ('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseAsArrayString')

//Um controller geralmente possui 5 funções que são: index, show, store, update, destroy
//index: uma lista, show: um unico , store: criação, update: atualizar e destroy: deletar

module.exports = {
    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
        const { github_userName, techs, latitude, longitude }  = request.body;

        let dev = await Dev.findOne({ github_userName })

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_userName}`);
    
            const {name = login, avatar_url, bio} = (apiResponse.data);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            const techsArray = parseStringAsArray(techs)
        
            dev = await Dev.create({
                github_userName,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location,
            })
            console.log(dev);
        }


        return response.json(dev);
    }
}
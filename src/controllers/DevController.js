const axios = require ('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/ParseAsArrayString')

//Um controller geralmente possui 5 funções que são: index, show, store, update, destroy
//index: uma lista, show: um unico , store: criação, update: atualizar e destroy: deletar

module.exports = {
    async index (request, response){
        const devs = await Dev.find();
        return response.json(devs)
        .send("Method index in Dev Controller")
        .header('Access-Control-Allow-Origin', 'http://localhost:3333')
        .header('x-correlation-id', correlationId)
        .header('origin', 'http://localhost:3333');
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


        return response.json(dev)
        .send("Method index in Dev Controller")
        .header('Access-Control-Allow-Origin', 'http://localhost:3333')
        .header('x-correlation-id', correlationId)
        .header('origin', 'http://localhost:3333');;
    },

    async update (request, response){
        let devUpdate = await Dev.findByIdAndUpdate(request.params.id, req.body, { new: true})
        var jsonStr = req.query.params;
        try {
            var jsonObj = JSON.parse(jsonStr);
            res.send('Success');
          } catch (e) {
            res.status(400).send('Invalid JSON string');
          }
        return response.json(devUpdate)
        .send("Method index in Dev Controller")
        .header('Access-Control-Allow-Origin', 'http://localhost:3333')
        .header('x-correlation-id', correlationId)
        .header('origin', 'http://localhost:3333');;  
    },

    async destroy (request, response){
        await Dev.findByIdAndDelete(request.params.id)

        return response.send('deletou esta bagaça')
        .send("Method index in Dev Controller")
        .header('Access-Control-Allow-Origin', 'http://localhost:3333')
        .header('x-correlation-id', correlationId)
        .header('origin', 'http://localhost:3333');;
    }
}
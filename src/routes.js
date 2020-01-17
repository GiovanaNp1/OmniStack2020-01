const { Router } = require ('express')
const axios = require ('axios')
const Dev = require('./models/Dev')

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_userName, techs, latitude, longitude }  = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_userName}`);

    const {name = login, avatar_url, bio} = (apiResponse.data);

    const location = {
        type: 'Point',
        coodinates: [longitude, latitude],
    };

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_userName,
        name,
        bio,
        avatar_url,
        techs: techsArray,
        location,
    })

    console.log(dev);

    return response.json(dev);
});

module.exports = routes
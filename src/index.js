// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'GitHub_Match',
  
    // Use if APM Server requires a token
    secretToken: 'doHjfUYeymCziADsyk',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://971ef91f0c3348d0a2eaa84f9697bd19.apm.us-east-1.aws.cloud.es.io:443',
})

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app =  express();

mongoose.connect('mongodb+srv://GiovanaN:gio19gio@cluster0-elgva.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())
app.use(routes);

//Metodos HTTP: GET, POST, PUT , DELETE

//Tipos de parametros:
//Query Params: request.query, Visiveis na URL, paramentros na URL (filtros, ordenação, paginação...)  -- GET
//Routes Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


app.listen(3333);
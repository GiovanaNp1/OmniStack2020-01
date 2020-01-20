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
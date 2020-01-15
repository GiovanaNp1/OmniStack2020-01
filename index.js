const express = require('express');
const mongoose = require('mongoose');

const app =  express();

mongoose.connect('mongodb+srv://GiovanaN:gio19gio@cluster0-elgva.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())

//Metodos HTTP: GET, POST, PUT , DELETE

//Tipos de parametros:
//Query Params: request.query, Visiveis na URL, paramentros na URL (filtros, ordenação, paginação...)  -- GET
//Routes Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello Omnistack!' });
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({ message: 'Hello Omnistack!' });
});

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack!' });
});



app.listen(3333);
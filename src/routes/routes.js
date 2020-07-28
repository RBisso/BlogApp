const express = require('express');
const { response } = require('express');

const routes = express.Router();

routes.get('/', (request,response) => {
    return response.render('index');
});
routes.get('/CreatePost', (request,response) => {
    return response.render('createPost');
});

module.exports = routes;
const express = require('express');
const PostModel = require('../models/posts');
const PostController = require('../controller/posts');

const routes = express.Router();

/*routes.get('/', (request,response) => {
    return response.render('home', {title: 'Hello World', message: 'This is my f*** blog'});
});*/
routes.get('/', PostController.getPosts);
routes.get('/admin/CreatePost', (request,response) => {
    return response.render('createPost', {title: 'Admin area', message: 'top secret'});
});
routes.post('/admin/CreatePost', PostController.createPost);

module.exports = routes;
const mongoose = require('mongoose');

const Post = mongoose.model('post');

module.exports = {
    async createPost(request, response) {
        try{
            console.log(request.body)
            const post = new Post({
                author    : request.body.author,
                title     : request.body.title,
                abstract  : request.body.abstract,
                content   : request.body.content
            });
            await post.save()
                .then(() => {
                    response.status(201).redirect('/');
                })
                .catch((error) => {
                    response.status(500).json({message: error.message});
                });
        } catch(err) {
            console.log(err);
        }
        /*
        try {
                await post.save((err, p) => {
                    if(err) response.status(500).send({message: err.message});
                    response.status(201).render('admin', {message:'Post Created'}); 
                });
            } catch(err) {
                response.status(500).send({message: err.message});
            }    
        */
    },

    async getPosts(request, response) {
        try {
            const posts = await Post.find()
                .then(() => {
                    response.send({ posts : posts });
                })
                .catch((error) => {
                    response.status(500).json({message: error.message});
                });
        } catch(err) {
            console.log(err);
        }
    }
};

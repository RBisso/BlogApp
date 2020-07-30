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
                    response.status(400).send({message: error.message});
                });
        } catch(err) {
            console.log(err);
        }
        /*await post.save()
                .then((post) => {
                    response.status(201).rendirect('/index');
                })
                .catch((error) => {
                    response.status(400).send({message: error.message});
                });
        try {
                await post.save((err, p) => {
                    if(err) response.status(500).send({message: err.message});
                    response.status(201).render('admin', {message:'Post Created'}); 
                });
            } catch(err) {
                response.status(500).send({message: err.message});
            }    
        */
    }
};

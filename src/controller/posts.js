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
    },

    async getPosts(request, response) {
        try {
            const posts = await Post.find({})
            if (posts)
                response.render('index', {title: "cu", posts: posts});
            else
                response.status(500).json({message: "error getting data from database"});
        } catch(err) {
            console.log('error!?!?')
            console.log(err);
        }
    },
    
    async getPost(request,response) {
        try {
            const post = await Post.findOne({title: request.params.id});
            if (post)
                response.render('post', {title: post.title, post: post});
            else
                response.status(500).json({message: "error getting post data"});
        } catch(err) {
            console.log(err);
        }
    }
};
/*
Rodrigo Bisso
My second post
I finished most of the main functions, now i need to finish creating a post
So, the main page is almost done. I need to create some functions to split the post in pages. I think 5 posts per page is a good number, but need to be tested. This post is to try making the CreatePost page to work. To create the post, I will use fetch for now. Maybe I change it later. For now, sorry for my bad english :).

*/
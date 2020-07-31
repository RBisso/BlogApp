const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author   :{
        type    : String,
        required: true
    },
    title    :{
        type    : String,
        required: true
    },
    abstract :{
        type    : String,
        required: true
    },
    content  :{
        type    : String,
        required: true
    }
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;
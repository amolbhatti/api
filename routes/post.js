const express = require('express');
const post = require('../model/post');


const routes = express.Router();

// Gets back all the post
routes.get('/', async (req, res) => {
    try {
        const posts = await post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.json({ message: err });
    }

});

// specific post 
routes.get('/:postId', async (req, res) => {
    try {
        const specific = await post.findById(req.params.postId);
        res.status(200).json(specific);
    } catch (err) {
        res.json({ message: err });
    }
});

// submits a post 
routes.post('/create', async (req, res) => {
    const data = new post({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    try {
        const savedData = await data.save()
        res.json(savedData);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete a post 
routes.delete('/delete/:postId', async (req, res) => {
    try {
        const removePost = await post.remove({_id:req.params.postId});
        res.status(200).json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
});

// update post
routes.patch('/update/:postId', async (req, res) => {
    try {
        const updatePost = await post.updateOne(
            {_id:req.params.postId},
            { $set: {email:req.body.email}}
                );
        res.status(200).json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = routes;
const express = require('express');
const router = express.Router();
const Model = require('../model/model')

// Post Method: Create a new post.
router.post('/createPost', (req, res) => {
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content
    })

    try{
        const result = newPost.save();
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

// Get : Fetch Post.
router.get('/getAllPost', (req, res) => {
    res.status(200).send('All posts');
});

// GEt : Fetch Single post
router.get('/getPost/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Single post: ${id}`);
});

// Patch : Edit Single post
router.patch('/editPost/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Edit post: ${id}`);
});

// Delete : delete Single post
router.delete('/deletePost/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Delete post: ${id}`);
});

module.exports = router;
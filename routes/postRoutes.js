const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const PostController = require('../controllers/PostController');

router.post('/add', PostController.create);
router.get('/all', PostController.findAll);
router.get('/:id', PostController.findById);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost)


module.exports=router
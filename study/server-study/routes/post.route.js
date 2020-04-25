const express = require('express');
const { getPost, getPosts } = require('../controllers/post.controller');

const router = express.Router();

router.get('/', getPost);
router.get('/:postId', getPosts);

module.exports = router;

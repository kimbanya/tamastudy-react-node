const express = require('express');
const { getPost, getPosts } = require('../controllers/post.controller');

const roleChecker = require('../middlewares/roleChecker.middleware');

const router = express.Router();

router.get('/', roleChecker('user', 'admin'), getPosts);
router.get('/:postId', getPost);

module.exports = router;

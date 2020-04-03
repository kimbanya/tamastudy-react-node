const express = require('express');
const userRoutes = require('./user.route');
const postRoutes = require('./post.route');
const postCommentRoutes = require('./postComment.route');
const studyRoutes = require('./study.route');
const studyTodoRoutes = require('./studyTodo.route');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/postComment', postCommentRoutes);
router.use('/study', studyRoutes);
router.use('/studyTodo', studyTodoRoutes);

module.exports = router;

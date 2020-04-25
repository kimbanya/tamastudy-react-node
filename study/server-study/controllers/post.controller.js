const Post = require('../models/post.model');
const asyncHandler = require('../middlewares/asyncHandler.middleware');

const getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

const getPost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await Post.findById({ _id: postId });
  if (!post) return next(`${postId}에 대한 포스트가 존재하지 않습니다. `);
  res.status(200).json(post);
});

module.exports = {
  getPosts,
  getPost,
};

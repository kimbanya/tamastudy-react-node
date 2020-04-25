const express = require('express');
const postRouter = require('./post.route');

const router = express.Router();

router.use('/', (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'connect successful',
  });
});

module.exports = router;

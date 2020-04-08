const keys = require('../../keys');
const jwt = require('jsonwebtoken');

exports.setCurrentUserId = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]; // Bearer 부분을 떼버림
    }
    console.log(token, 'setCurrentUserId middleware');
    if (token) {
      const JWT_SECRET = keys.nodeJWTSecret;
      const currentUserId = await jwt.verify(token, JWT_SECRET).userId;
      req.currentUserId = currentUserId;
    } else {
      req.currentUserId = undefined;
    }
    next();
  } catch (error) {
    req.headers.authorization = undefined;
    req.currentUserId = undefined;
    next(error);
  }
};

exports.getCurrentUserId = (req, res, next) => {
  if (!req.currentUserId) {
    return next('페이지 접근이 제한되었습니다.');
  }
  next();
};

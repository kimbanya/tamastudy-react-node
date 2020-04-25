const roleChecker = (...role) => (req, res, next) => {
  if (role.includes(req.role)) {
    console.log('admin계정으로 로그인했습니다.');
  } else if (role.includes('user')) {
    console.log('일반회원 계정으로 로그인했습니다.');
  }
  console.log('**** 미들웨어를 통과하였습니다.  ****'.bgBlue);
  next();
};

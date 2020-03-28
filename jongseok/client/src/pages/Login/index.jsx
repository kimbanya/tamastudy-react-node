import React from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import useAuthContext from '../../hooks/useAuthContext';

const Login = () => {
  const auth = useAuthContext();
  return <LoginForm handleLogInFn={auth.handleLogInFn} loading={auth.authLoading} />;
};

export default Login;

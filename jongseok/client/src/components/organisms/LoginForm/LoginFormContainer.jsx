import React, { useState } from 'react';
import LoginFormPresenter from './LoginFormPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFn } from '../../../store/actions/auth.action';

const LoginFormContainer = ({ history, loginFn }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    loginFn(loginData, history);
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <LoginFormPresenter
      loginData={loginData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default withRouter(connect(null, { loginFn })(LoginFormContainer));

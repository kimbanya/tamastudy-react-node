import React, { useState } from 'react';
import LoginFormPresenter from './LoginFormPresenter';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const LoginFormContainer = ({ history, handleLogInFn, loading }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    handleLogInFn(loginData, history);
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
      loading={loading}
    />
  );
};

LoginFormContainer.propTypes = {
  history: PropTypes.func,
  handleLogInFn: PropTypes.func,
  loading: PropTypes.bool,
};

export default withRouter(LoginFormContainer);

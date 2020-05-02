import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthModalPresenter from './AuthModalPresenter';
import { signinFn, signupFn } from '../../../store/actions/v1/auth.action';

const initialState = {
  email: '',
  password: '',
};

const AuthModalContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  // onChange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinFn(formData, history));
  };

  const onClickShowPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <AuthModalPresenter
        onChange={handleChange}
        onSubmit={handleSubmit}
        formData={formData}
        showPassword={showPassword}
        onClickShowPassword={onClickShowPassword}
      />
    </div>
  );
};

export default AuthModalContainer;

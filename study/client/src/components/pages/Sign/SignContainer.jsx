import React, { useState } from 'react';
import SignPresenter from './SignPresenter';
import { connect } from 'react-redux';
import { signupFn } from '../../../store/actions/v1/auth.action';

const initialStateForSignup = {
  username: '',
  email: '',
  password: '',
};

const SignContainer = ({ authState, signupFn }) => {
  const [formData, setFormData] = useState(initialStateForSignup);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username === '' || formData.email === '' || formData.password === '') {
      alert('회원가입 폼 정보를 입력해주세요. ');
      return;
    }
    signupFn(formData);
    setFormData(initialStateForSignup);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder={'유저명을 입력해주세요. '}
          value={formData.username}
          name={'username'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          placeholder={'이메일을 입력해주세요. '}
          value={formData.email}
          name={'email'}
          onChange={handleChange}
        />
        <input
          type={'password'}
          placeholder={'비밀번호를 입력해주세요. '}
          value={formData.password}
          name={'password'}
          onChange={handleChange}
        />
        <button type={'submit'}>회원가입</button>
      </form>
      <SignPresenter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { signupFn })(SignContainer);

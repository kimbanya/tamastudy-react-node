import React from 'react';
import {
  FormWrapper,
  FormTitle,
  Form,
  FiledSet,
  InputEmailBox,
  InputPasswordBox,
  FormButtonBox,
  ResetPasswordButton,
  LoginButton,
} from './styled';

const Signin = ({ onChange, onSubmit, formData, showPassword, onClickShowPassword }) => {
  return (
    <FormWrapper>
      <FormTitle>
        <p>이메일과 패스워드를 입력해주세요. </p>
      </FormTitle>
      <Form onSubmit={onSubmit}>
        <FiledSet>
          <label htmlFor={'authEmail'}>Email *</label>
          <InputEmailBox>
            <input
              placeholder={'Email을 입력해주세요. '}
              type={'text'}
              id={'authEmail'}
              name={'email'}
              value={formData.email}
              onChange={onChange}
            />
          </InputEmailBox>
        </FiledSet>
        <FiledSet>
          <label htmlFor={'authPassword'}>Password *</label>
          <InputPasswordBox>
            <input
              placeholder={'Password를 입력해주세요. '}
              type={showPassword ? 'text' : 'password'}
              id={'authPassword'}
              name={'password'}
              value={formData.password}
              onChange={onChange}
            />
            <button onClick={onClickShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
          </InputPasswordBox>
        </FiledSet>
        <FormButtonBox>
          <ResetPasswordButton onClick={(e) => e.preventDefault()}>
            비밀번호를 잊어버리셨습니까?
          </ResetPasswordButton>
          <LoginButton type={'submit'}>Log In</LoginButton>
        </FormButtonBox>
      </Form>
    </FormWrapper>
  );
};

export default Signin;

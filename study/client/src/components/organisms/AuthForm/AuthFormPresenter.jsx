import React from 'react';
import styled from '@emotion/styled';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const AuthFormPresenter = ({ onChange, onSubmit, formData, showPassword, onClickShowPassword }) => {
  return (
    <Wrapper>
      {/*  Auth Button (Login  / Register)  */}
      <AuthButtonBox>
        <AuthButton>
          <span>LOGIN</span>
        </AuthButton>
        <AuthButton>
          <span>SIGN UP</span>
        </AuthButton>
      </AuthButtonBox>
      {/* form */}
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
      {/* google / facebook login */}
      <SnsWrapper>
        <FBLogin>
          <FBIcon>
            <FacebookIcon style={{ color: 'white' }} />
          </FBIcon>
          <FBText>
            Sign in with <strong>FaceBook</strong>
          </FBText>
        </FBLogin>
        <GHLogin>
          <GHIcon>
            <GitHubIcon style={{ color: 'white' }} />
          </GHIcon>
          <GHText>
            Sign in with <strong>Google+</strong>
          </GHText>
        </GHLogin>
      </SnsWrapper>
    </Wrapper>
  );
};

export default AuthFormPresenter;

const Wrapper = styled.div`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.13);
`;

const AuthButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const AuthButton = styled.button`
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
  outline: none;
  background-color: #e2e2e2;
  transition: background-color 100ms ease-in;
  font-weight: 900;
  color: #7f8c8d;
  &:hover,
  &:active,
  &:focus {
    background-color: #ffffff;
    color: #000000;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTitle = styled.div`
  padding: 24px 0;
`;
const Form = styled.form`
  width: 100%;
`;
const FiledSet = styled.fieldset`
  border: none;
  border-top: 1px solid #eaeaea;
  &:last-of-type {
    border-bottom: 1px solid #eaeaea;
  }
  padding: 16px;
  label {
    text-transform: uppercase;
    width: 100%;
    font-weight: 900;
    margin-bottom: 8px;
  }
`;

const InputBox = styled.div``;
const InputEmailBox = styled(InputBox)`
  input {
    width: 100%;
  }
`;
const InputPasswordBox = styled(InputBox)`
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
  }

  /* show Password button */
  button {
    outline: none;
    padding: 0 16px;
    border-left: 1px solid #eaeaea;
    cursor: pointer;
  }
`;

const FormButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const FormButton = styled.button`
  width: 100%;
`;

const ResetPasswordButton = styled(FormButton)`
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`;
const LoginButton = styled(FormButton)`
  padding: 16px 0;
  background-color: #4cb050;
  color: #ffffff;
  margin: 16px;
  cursor: pointer;
`;

const SnsWrapper = styled.div``;
const SnsLogin = styled.div`
  display: flex;
  cursor: pointer;
`;
const SnsIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SnsText = styled.div`
  width: calc(100% - 60px);
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    margin-left: 4px;
  }
`;

// FaceBook
const FBLogin = styled(SnsLogin)``;
const FBIcon = styled(SnsIcon)`
  background-color: #283d67;
`;
const FBText = styled(SnsText)`
  background-color: #3c5a9a;
`;

// Github
const GHLogin = styled(SnsLogin)``;
const GHIcon = styled(SnsIcon)`
  background-color: #b42f1f;
`;
const GHText = styled(SnsText)`
  background-color: #dd4b3b;
`;

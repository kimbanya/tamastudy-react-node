import React from 'react';
import styled from '@emotion/styled';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Signin from '../../molecules/AuthForm/Signin';

const AuthModalPresenter = ({
  onChange,
  onSubmit,
  formData,
  showPassword,
  onClickShowPassword,
}) => {
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
      <Signin
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        showPassword={showPassword}
        onClickShowPassword={onClickShowPassword}
      />
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

export default AuthModalPresenter;

const Wrapper = styled.div`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.13);
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
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

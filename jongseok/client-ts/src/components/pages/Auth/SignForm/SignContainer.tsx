import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SignPresenter from './SignPresenter';
import useFormBase from '../../../../hooks/useFormBase';
import { authActions } from '../../../../store/actions';
import { ISignFormData } from '../auth-types';

const initialStateForSignup: ISignFormData = {
  username: '',
  email: '',
  password: '',
};

const initialStateForSignin: ISignFormData = {
  email: '',
  password: '',
};

interface Props extends RouteComponentProps<any> {}

const SignContainer = ({ history, match }: Props) => {
  const dispatch = useDispatch();

  const isSignin = match.url.startsWith('/signin');

  const {
    formData: signupFormData,
    handleChange: signupHandleChange,
    handleSubmit: signupHandleSubmit,
  } = useFormBase(initialStateForSignup);
  const {
    formData: signinFormData,
    handleChange: signinHandleChange,
    handleSubmit: signinHandleSubmit,
  } = useFormBase(initialStateForSignin);

  const onClickSubmit = useCallback(
    (event: React.FormEvent<any>) => {
      if (isSignin) {
        signinHandleSubmit(event);
        dispatch(authActions.signinFn(signinFormData));
      } else {
        signupHandleSubmit(event);
      }
      history.push('/');
    },
    [isSignin, dispatch, signinHandleSubmit, signupHandleSubmit, signinFormData, history],
  );

  return (
    <div>
      <SignPresenter
        isSignin={isSignin}
        formData={isSignin ? signinFormData : signupFormData}
        onClick={onClickSubmit}
        onChange={isSignin ? signinHandleChange : signupHandleChange}
      />
    </div>
  );
};

export default withRouter(SignContainer);

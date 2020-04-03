import React from 'react';
import SignPresenter from './SignPresenter';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinFn } from '../../../store/actions/v1/auth.action';
import { IRootState } from '../../../store/reducers';
import useFormBase from '../../../hooks/useFormBase';

export interface ISignFormData {
  username?: string;
  email: string;
  password: string;
}

const initialStateForSignup: ISignFormData = {
  username: '',
  email: '',
  password: '',
};

const initialStateForSignin: ISignFormData = {
  email: '',
  password: '',
};

interface Props extends RouteComponentProps<any> {
  authState: IRootState['authState'];
  signinFn: any;
}

const SignContainer = ({ history, match, authState, signinFn }: Props) => {
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

  const onClickSubmit = (event: React.FormEvent<any>) => {
    if (isSignin) {
      signinHandleSubmit(event);
      signinFn(signinFormData);
    } else {
      //
    }
    history.push('/');
  };

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

const mapStateToProps = (state: IRootState) => ({
  authState: state.authState,
});

export default withRouter(connect(mapStateToProps, { signinFn })(SignContainer));

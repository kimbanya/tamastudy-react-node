import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { connect } from 'react-redux';
import { loadUserFn } from '../store/actions/v1/auth.action';

const AppContainer = ({ loadUserFn, authState }) => {
  useEffect(() => {
    loadUserFn();
  }, [loadUserFn, authState.isLoggedIn]);

  console.log(authState);

  return (
    <>
      <AppPresenter />
      <ToastContainer position={'bottom-center'} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { loadUserFn })(AppContainer);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import AppPresenter from './AppPresenter';
import { loadUserFn } from '../store/actions/v1/auth.action';
import { IRootState } from '../store/reducers/index';
import theme from '../styles/theme';

interface Props {
  authState: IRootState['authState'];
  loadUserFn: any;
}

const AppContainer = ({ authState, loadUserFn }: Props) => {
  useEffect(() => {
    loadUserFn();
  }, [loadUserFn, authState.isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <AppPresenter />
      <ToastContainer position={'bottom-center'} />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { loadUserFn })(AppContainer);

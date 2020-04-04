import React from 'react';
import AppPresenter from './AppPresenter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const AppContainer = () => {
  return (
    <>
      <AppPresenter />
      <ToastContainer position={'bottom-center'} />
    </>
  );
};

export default AppContainer;

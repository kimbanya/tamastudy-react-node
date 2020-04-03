import React from 'react';
import AppPresenter from './AppPresenter';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

interface Props {}

const AppContainer = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AppPresenter />
    </ThemeProvider>
  );
};

export default AppContainer;

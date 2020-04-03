import React from 'react';
import AppPresenter from './AppPresenter';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

interface Props {}

const AppContainer = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppPresenter />
    </ThemeProvider>
  );
};

export default AppContainer;

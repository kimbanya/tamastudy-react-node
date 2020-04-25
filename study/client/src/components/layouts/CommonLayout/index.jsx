import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';
import styled from '@emotion/styled';

const CommonLayout = ({ children, noHeader, noFooter }) => {
  return (
    <Wrapper>
      {!noHeader && <Header />}
      <Container>{children}</Container>
      {!noFooter && <Footer />}
    </Wrapper>
  );
};

export default CommonLayout;

const Wrapper = styled.div``;

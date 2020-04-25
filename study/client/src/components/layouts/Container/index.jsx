import React from 'react';
import styled from '@emotion/styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.section`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
    height: inherit;
  }
`;

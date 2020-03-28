import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 90px 1fr min-content;
  width: 100%;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 0 auto;
  }
`;

const ContainerLayout = ({ className, children }) => {
  return <Layout className={className}>{children}</Layout>;
};

export default ContainerLayout;

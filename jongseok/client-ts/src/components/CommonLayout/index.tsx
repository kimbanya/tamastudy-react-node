import React from 'react';
import styled, { css } from 'styled-components';
import AppHeader from '../organisms/AppHeader';
import AppNav from '../organisms/AppNav';
import { mediaQueries } from '../../styles/mediaQuery';

interface IProps {
  className?: string;
  noHeader?: boolean;
  noNav?: boolean;
  noFooter?: boolean;
}
const CommonLayout: React.SFC<IProps> = ({
  noHeader = false,
  noNav = false,
  noFooter = false,
  className,
  children,
}) => {
  return (
    <LayoutWrapper className={className}>
      {!noHeader && <AppHeader />}
      {!noNav && <AppNav />}
      <section>{children}</section>
      {!noFooter && <footer>footer</footer>}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  ${(props) => css`
    margin-top: ${props.theme.space * 2}px;
    padding: 0 ${props.theme.space * 2}px;
    grid-gap: ${props.theme.space}px;
  `}
  display: grid;
  grid-template-rows: max-content min-content min-content 60px;
  width: 100%;
  box-sizing: border-box;
  ${mediaQueries('tablet')`
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export default CommonLayout;

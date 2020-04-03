import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
}) => (
  <LayoutWrapper className={className}>
    {!noHeader && (
      <header>
        <Link to={'/signin'}>SIGN IN</Link>
      </header>
    )}
    {!noNav && <nav>nav</nav>}
    <section>{children}</section>
    {!noFooter && <footer>footer</footer>}
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.base.grey};
  display: grid;
  grid-template-rows: 140px 100px min-content 60px;
`;

export default CommonLayout;

import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Props extends RouteComponentProps<any> {}

const AppNav = ({ location }: Props) => {
  return (
    <NavWrapper>
      <NavList>
        <CustomLink
          to={'/posts'}
          className={location.pathname.startsWith('/post') ? 'nav__link-active' : ''}
        >
          POST
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink
          to={'/studies'}
          className={
            location.pathname.startsWith('/studies') || location.pathname.startsWith('/study')
              ? 'nav__link-active'
              : ''
          }
        >
          STUDY
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink
          to={'/contact'}
          className={location.pathname.startsWith('/contact') ? 'nav__link-active' : ''}
        >
          CONTACT
        </CustomLink>
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-color: red; */
`;

const NavList = styled.li`
  justify-self: center;
  list-style: none;
`;

const CustomLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  font-family: 'Share', cursive;
  font-size: 1.1rem;
  box-sizing: border-box;
  ${(props) =>
    css`
      color: ${props.theme.colors.text.darkSecondary};
      padding: ${props.theme.space}px 0;
    `}

  &.nav__link-active {
    color: ${(props) => props.theme.colors.base.black};
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.colors.base.black};
  }
`;

export default withRouter(AppNav);

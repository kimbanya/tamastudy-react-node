import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';
import { ReactComponent as Logo } from '../../../assets/images/logo/nike.svg';
import Typo from '../../atoms/Typo';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  ${mediaQuery(2)} {
    width: 1000px;
    height: inherit;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${theme.space}px ${theme.space}px ${theme.space}px ${theme.space}px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const LogoSize = styled.div`
  width: 10rem;
  cursor: pointer;
`;

const LogoTypo = styled(Typo)`
  cursor: pointer;
`;

const HeaderMenuBox = styled.div`
  display: flex;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
`;

const AuthLink = styled(NavLink)`
  margin-left: ${theme.space * 2}px;
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const HeaderPresenter = ({ isLoggedIn, handleLogOutFn, handleNavigation, onClickMoveToHome }) => {
  return (
    <Container>
      <Header>
        <LogoBox>
          <LogoSize>
            <Logo onClick={handleNavigation} />
          </LogoSize>
          <LogoTypo variant="h2" onClick={onClickMoveToHome}>
            TokyoTamaStudy
          </LogoTypo>
        </LogoBox>

        <HeaderMenuBox>
          <AuthBox>
            {isLoggedIn && (
              <AuthLink to={'#'} onClick={handleLogOutFn}>
                LOGOUT
              </AuthLink>
            )}
            {!isLoggedIn && (
              <>
                <AuthLink to="/signup">SIGN UP</AuthLink>
                <AuthLink to="/signin">SIGN IN</AuthLink>
              </>
            )}
          </AuthBox>
        </HeaderMenuBox>
      </Header>
    </Container>
  );
};

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogOutFn: PropTypes.func,
};

export default HeaderPresenter;

import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Container from '../Container';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutFn } from '../../../store/actions/v1/auth.action';

const Header = () => {
  const history = useHistory();
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logOutFn());
  }, [dispatch]);
  return (
    <Wrapper>
      <Container>
        <HeaderBox>
          <Logo onClick={() => history.push('/')}>
            <img
              src="https://notagamer.net/wp-content/uploads/2020/03/Untitled-3-1140x570.jpg"
              alt=""
            />
          </Logo>
          <Nav>
            {authState.isLoggedIn ? (
              <li onClick={handleLogout}>Logout</li>
            ) : (
              <>
                <li>
                  <Link to={'/auth'}>Login</Link>
                </li>
                <li>
                  <Link to={'/auth'}>Register</Link>
                </li>
              </>
            )}
          </Nav>
        </HeaderBox>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: grey;
  box-sizing: border-box;
  padding: 8px 0;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 80px;
  height: 40px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    cursor: pointer;
    list-style: none;
    margin: 0 16px;
    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
    }
  }
`;

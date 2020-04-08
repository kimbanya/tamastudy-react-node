import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../../../assets/icons/back.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';

interface Props {}

const AppNavButton = (props: Props) => {
  return (
    <Wrapper>
      <Back />
      <Home />
      <Menu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Back = styled(BackIcon)`
  fill: #ffff;
`;

const Home = styled(HomeIcon)`
  fill: #ffff;
`;

const Menu = styled(MenuIcon)`
  fill: #ffff;
`;

export default AppNavButton;

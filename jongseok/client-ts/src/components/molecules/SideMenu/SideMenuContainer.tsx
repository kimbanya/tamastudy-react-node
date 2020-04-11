import React from 'react';
import SideMenuPresenter from './SideMenuPresenter';

interface Props {
  menuIsOpen: boolean;
}

const SideMenuContainer = ({ menuIsOpen }: Props) => {
  return <SideMenuPresenter menuIsOpen={menuIsOpen} />;
};

export default SideMenuContainer;

import React from 'react';
import HeaderPresenter from './HeaderPresenter';
import useAuthContext from '../../../hooks/useAuthContext';

const HeaderContainer = ({ handleNavigation }) => {
  const auth = useAuthContext();

  return (
    <HeaderPresenter
      isLoggedIn={auth.isLoggedIn}
      error={auth.authError}
      loading={auth.authLoading}
      handleLogInFn={auth.handleLogInFn}
      handleLogOutFn={auth.handleLogOutFn}
      handleNavigation={handleNavigation}
    />
  );
};

export default HeaderContainer;

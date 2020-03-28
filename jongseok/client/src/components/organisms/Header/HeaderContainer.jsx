import React from 'react';
import HeaderPresenter from './HeaderPresenter';
import { connect } from 'react-redux';
import { logoutFn } from '../../../store/actions/auth.action';

const HeaderContainer = ({ handleNavigation, logoutFn, auth }) => {
  const { isLoggedIn, error, loading } = auth;

  return (
    <HeaderPresenter
      handleLogOutFn={logoutFn}
      handleNavigation={handleNavigation}
      isLoggedIn={isLoggedIn}
      error={error}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { logoutFn })(HeaderContainer);

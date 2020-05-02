import React from 'react';
import AuthModal from '../../organisms/AuthModal';
import CommonLayout from '../../layouts/CommonLayout';

const Auth = () => {
  return (
    <CommonLayout noFooter>
      <AuthModal />
    </CommonLayout>
  );
};

export default Auth;

import React from 'react';
import AuthForm from '../../organisms/AuthForm';
import CommonLayout from '../../layouts/CommonLayout';

const Auth = () => {
  return (
    <CommonLayout noFooter>
      <AuthForm />
    </CommonLayout>
  );
};

export default Auth;

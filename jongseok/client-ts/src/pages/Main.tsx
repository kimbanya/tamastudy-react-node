import React from 'react';
import CommonLayout from '../components/CommonLayout/index';
import GoogleMap from '../components/organisms/GoogleMap';

interface Props {}

const Main = (props: Props) => {
  return (
    <CommonLayout>
      <GoogleMap />
    </CommonLayout>
  );
};

export default Main;

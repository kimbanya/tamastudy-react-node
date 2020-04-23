import React from 'react';
import Loader from 'react-loader-spinner';

interface Props {}

const Spinner = (props: Props) => {
  return <Loader type="ThreeDots" color="#000000" height={30} width={30} />;
};

export default Spinner;

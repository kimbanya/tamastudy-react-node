import React from 'react';
import Loader from 'react-loader-spinner';
import { css } from '@emotion/core';

const Spinner = () => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Loader type="TailSpin" color="#000000" height={300} width={300} />
    </div>
  );
};

export default Spinner;

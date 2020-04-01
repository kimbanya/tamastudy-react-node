import React from 'react';
import { css } from '@emotion/core';

const StudyDetail = ({ study }) => {
  return (
    <div
      css={css`
        display: grid;
      `}
    >
      <h1>Title: {study.title}</h1>
      <h3>Description: {study.description}</h3>
      <h3>Image: {study.imgUrl}</h3>
      <h3>Address: {study.address}</h3>
      <h3>like: {study.like.length}</h3>
      <h3>
        participants:{' '}
        {study.participant.map((user) => (
          <span key={user._id}>{user.username}, </span>
        ))}
      </h3>
      <h3>View: {study.view}</h3>
    </div>
  );
};

export default StudyDetail;

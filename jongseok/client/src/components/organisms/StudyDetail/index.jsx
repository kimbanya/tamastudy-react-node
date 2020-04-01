import React from 'react';
import { css } from '@emotion/core';
import Spinner from '../../atoms/Spinner';
import { connect } from 'react-redux';

const StudyDetail = ({ study, loading }) => {
  if (!study.participant || !study.like) return <Spinner />;
  if (loading) return <Spinner />;

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
      <h3>
        {study.participant &&
          study.participant.map((user) => <span key={user._id + 1}>{user.username}, </span>)}
      </h3>
      <h3>View: {study.view}</h3>
    </div>
  );
};

const mapStateToProps = ({ studyState }) => ({
  study: studyState.study,
  loading: studyState.loading,
});

export default connect(mapStateToProps, {})(StudyDetail);

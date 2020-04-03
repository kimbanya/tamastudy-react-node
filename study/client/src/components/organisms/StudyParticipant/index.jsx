import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../atoms/Spinner';
import { css } from '@emotion/core';
import theme from '../../../theme';
import { joinStudyById } from '../../../store/actions/study.action';

const buttonStyle = css`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: ${theme.space}px ${theme.space * 3}px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    -webkit-text-fill-color: white;
  }
  &:active,
  :focus {
    outline: none;
  }
`;

const StudyParticipant = ({ loading, study, joinStudyById }) => {
  if (loading) return <Spinner />;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: ${theme.space * 4}px;
      `}
    >
      <button css={buttonStyle} onClick={() => joinStudyById(study._id)}>
        참가하기 ( {study.participant && study.participant.length} / {study.maxParticipant} )
      </button>
    </div>
  );
};

const mapStateToProps = ({ studyState }) => ({
  study: studyState.study,
  loading: studyState.loading,
});

export default connect(mapStateToProps, { joinStudyById })(StudyParticipant);

import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { css } from '@emotion/core';
import theme from '../../../theme';
import { connect } from 'react-redux';
import { updateLikeByStudyId, updateUnLikeByStudyId } from '../../../store/actions/study.action';
import { withRouter } from 'react-router-dom';

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

const StudyLike = ({ match, updateLikeByStudyId, updateUnLikeByStudyId, auth, like }) => {
  console.log(like);
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: ${theme.space * 4}px;
      `}
    >
      {like && like.find((user) => user._id === auth.currentUserId) === undefined && (
        <button onClick={() => updateLikeByStudyId(match.params.studyId)} css={buttonStyle}>
          <ThumbUpAltIcon />
          <span
            css={css`
              margin-left: ${theme.space}px;
            `}
          >
            {like && like.length}
          </span>
        </button>
      )}

      {like && like.find((user) => user._id === auth.currentUserId) !== undefined && (
        <button onClick={() => updateUnLikeByStudyId(match.params.studyId)} css={buttonStyle}>
          <ThumbDownIcon />
          <span
            css={css`
              margin-left: ${theme.space}px;
            `}
          >
            {like && like.length}
          </span>
        </button>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth, studyState }) => ({
  auth,
  like: studyState.study.like,
});

export default withRouter(
  connect(mapStateToProps, { updateLikeByStudyId, updateUnLikeByStudyId })(StudyLike),
);

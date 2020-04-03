import React, { useEffect } from 'react';
import GetStudyTodosByStudyId from '../../../components/organisms/GetStudyTodosByStudyId';
import { connect } from 'react-redux';
import { getStudyById, updateLikeByStudyId } from '../../../store/actions/study.action';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/atoms/Spinner';
import CustomGoogleMap from '../../../components/organisms/CustomGoogleMap';
import StudyDetail from '../../../components/organisms/StudyDetail';
import StudyLike from '../../../components/organisms/StudyLike';
import { css } from '@emotion/core';
import StudyParticipant from '../../../components/organisms/StudyParticipant';

const GetStudyByIdContainer = ({ match, studyState, getStudyById }) => {
  useEffect(() => {
    getStudyById(match.params.studyId);
  }, [getStudyById, match.params.studyId]);

  if (studyState.loading) return <Spinner />;

  // studyState.study.participant.find((p) => p === auth.currentUserId)

  return (
    <div>
      <section
        css={css`
          display: grid;
          grid-template-columns: repeat(2, minmax(50%, 1fr));
          grid-gap: 16px;
        `}
      >
        <CustomGoogleMap lat={studyState.study.lat} lng={studyState.study.lng} />
        <StudyDetail />
        <StudyLike />
        <StudyParticipant />
      </section>
      <GetStudyTodosByStudyId />
    </div>
  );
};

const mapStateToProps = ({ studyState }) => ({ studyState });

export default withRouter(
  connect(mapStateToProps, { getStudyById, updateLikeByStudyId })(GetStudyByIdContainer),
);

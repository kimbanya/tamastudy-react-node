import React, { useEffect } from 'react';
import GetStudyTodosByStudyId from '../../../components/organisms/GetStudyTodosByStudyId';
import { connect } from 'react-redux';
import { getStudyById } from '../../../store/actions/study.action';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/atoms/Spinner';
import CustomGoogleMap from '../../../components/organisms/CustomGoogleMap';
import StudyDetail from '../../../components/organisms/StudyDetail';
import { css } from '@emotion/core';

const GetStudyByIdContainer = ({ match, auth, studyState, getStudyById }) => {
  useEffect(() => {
    getStudyById(match.params.studyId);
  }, [getStudyById, match.params.studyId]);

  if (studyState.loading) return <Spinner />;

  const isParticipate = Boolean(studyState.study.participant.find((p) => p === auth.currentUserId));

  return (
    <div>
      <section
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 16px;
        `}
      >
        <CustomGoogleMap lat={studyState.study.lat} lng={studyState.study.lng} />
        <StudyDetail study={studyState.study} />
      </section>
      <GetStudyTodosByStudyId isParticipate={isParticipate} />
    </div>
  );
};

const mapStateToProps = ({ auth, studyState }) => ({ auth, studyState });

export default withRouter(connect(mapStateToProps, { getStudyById })(GetStudyByIdContainer));

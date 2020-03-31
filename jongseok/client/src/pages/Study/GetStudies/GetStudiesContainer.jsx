import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudies } from '../../../store/actions/study.action';
import GetStudiesPresenter from './GetStudiesPresenter';
import Spinner from '../../../components/atoms/Spinner';

import useGoogleMap from '../../../hooks/useGoogleMap';
import { withRouter } from 'react-router-dom';

const GetStudiesContainer = ({ history, getStudies, studyState }) => {
  useEffect(() => {
    getStudies();
  }, [getStudies]);

  const {
    bootstrapURLKeys,
    address,
    coordinates,
    handleSearchBarChange,
    handleSearchBarSubmit,
    handleDragEnd,
    handleGetRealLocation,
  } = useGoogleMap();

  const onClickToGetStudyById = (studyId) => {
    history.push(`/study/${studyId}`);
  };

  if (coordinates.lat === 0 || coordinates.lng === 0) return <Spinner />;
  if (studyState.loading) return <Spinner />;

  return (
    <GetStudiesPresenter
      bootstrapURLKeys={bootstrapURLKeys}
      address={address}
      coordinates={coordinates}
      handleChange={handleSearchBarChange}
      handleSubmit={handleSearchBarSubmit}
      handleDragEnd={handleDragEnd}
      handleGetRealLocation={handleGetRealLocation}
      studies={studyState.studies}
      onClickToGetStudyById={onClickToGetStudyById}
    />
  );
};

const mapStateToProps = ({ studyState }) => ({
  studyState,
});

export default withRouter(connect(mapStateToProps, { getStudies })(GetStudiesContainer));

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudies } from '../../../store/actions/study.action';
import GetStudiesPresenter from './GetStudiesPresenter';
import Spinner from '../../../components/atoms/Spinner';

import useGoogleMap from '../../../hooks/useGoogleMap';

const GetStudiesContainer = ({ getStudies, studyState }) => {
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
    />
  );
};

const mapStateToProps = ({ studyState }) => ({
  studyState,
});

export default connect(mapStateToProps, { getStudies })(GetStudiesContainer);

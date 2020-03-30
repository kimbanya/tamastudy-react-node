import React from 'react';
import CreateStudyPresenter from './CreateStudyPresenter';
import Spinner from '../../../components/atoms/Spinner';

import useGoogleMap from '../../../hooks/useGoogleMap';

const CreateStudyContainer = () => {
  const {
    bootstrapURLKeys,
    address,
    coordinates,
    handleSearchBarChange,
    handleSearchBarSubmit,
    handleDragEnd,
    handleGetRealLocation,
    handleGetCurrentLocation,
  } = useGoogleMap();

  if (coordinates.lat === 0 || coordinates.lng === 0) return <Spinner />;

  return (
    <CreateStudyPresenter
      bootstrapURLKeys={bootstrapURLKeys}
      address={address}
      coordinates={coordinates}
      handleChange={handleSearchBarChange}
      handleSubmit={handleSearchBarSubmit}
      handleDragEnd={handleDragEnd}
      handleGetRealLocation={handleGetRealLocation}
      handleGetCurrentLocation={handleGetCurrentLocation}
    />
  );
};

export default CreateStudyContainer;

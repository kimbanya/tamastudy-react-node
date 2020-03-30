import React from 'react';
import GetStudiesPresenter from './GetStudiesPresenter';
import Spinner from '../../../components/atoms/Spinner';

import useGoogleMap from '../../../hooks/useGoogleMap';

const GetStudiesContainer = () => {
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

  return (
    <GetStudiesPresenter
      bootstrapURLKeys={bootstrapURLKeys}
      address={address}
      coordinates={coordinates}
      handleChange={handleSearchBarChange}
      handleSubmit={handleSearchBarSubmit}
      handleDragEnd={handleDragEnd}
      handleGetRealLocation={handleGetRealLocation}
    />
  );
};

export default GetStudiesContainer;

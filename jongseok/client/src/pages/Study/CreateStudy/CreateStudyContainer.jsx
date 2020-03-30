import React, { useState, useEffect } from 'react';
import CreateStudyPresenter from './CreateStudyPresenter';
import Spinner from '../../../components/atoms/Spinner';

import useGoogleMap from '../../../hooks/useGoogleMap';
import { reverseGeoCode } from '../../../utils/mapHelpers';

const initialStateOfCreateForm = {
  title: '',
  description: '',
  imgUrl: '',
  address: '',
  lat: '',
  lng: '',
};

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

  const [formData, setFormData] = useState(initialStateOfCreateForm);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    console.log(formData);
  };

  useEffect(() => {
    setLocationInfo();
  }, [coordinates]);

  const setLocationInfo = async () => {
    const address = await reverseGeoCode(coordinates.lat, coordinates.lng);
    setFormData({
      ...formData,
      lat: coordinates.lat,
      lng: coordinates.lng,
      address,
    });
  };

  console.log(formData);

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
      formData={formData}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default CreateStudyContainer;

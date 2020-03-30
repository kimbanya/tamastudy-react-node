import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateStudyPresenter from './CreateStudyPresenter';
import Spinner from '../../../components/atoms/Spinner';
import useGoogleMap from '../../../hooks/useGoogleMap';
import { reverseGeoCode } from '../../../utils/mapHelpers';
import { createStudy } from '../../../store/actions/study.action';

const initialStateOfCreateForm = {
  title: '',
  description: '',
  imgUrl: '',
  address: '',
  lat: '',
  lng: '',
};

const CreateStudyContainer = ({ history, createStudy }) => {
  const {
    bootstrapURLKeys,
    address,
    coordinates,
    handleSearchBarChange,
    handleSearchBarSubmit,
    handleDragEnd,
    handleGetRealLocation,
  } = useGoogleMap();

  const [formData, setFormData] = useState(initialStateOfCreateForm);

  const setLocationInfo = useCallback(async () => {
    const address = await reverseGeoCode(coordinates.lat, coordinates.lng);
    setFormData({
      ...formData,
      lat: coordinates.lat,
      lng: coordinates.lng,
      address,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates.lat, coordinates.lng]);

  useEffect(() => {
    setLocationInfo();
  }, [coordinates, setLocationInfo]);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    createStudy(formData, history);
  };

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
      formData={formData}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps, { createStudy })(CreateStudyContainer));

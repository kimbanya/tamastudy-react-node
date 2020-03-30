import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
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

const CreateStudyContainer = ({ history }) => {
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

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return toast.error('정상적인 경로가 아닙니다. ');
      }
      const response = await axios.post('/api/v1/study/create', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      // history.push('/study');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
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

export default withRouter(CreateStudyContainer);

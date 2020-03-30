import React from 'react';
import GoogleMapSearchBar from '../../../components/molecules/GoogleMapSearchBar';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import AddIcon from '@material-ui/icons/Add';

const Container = styled.div`
  position: relative;
`;

const GoogleMapFrame = styled.div`
  width: 100%;
  height: 40vw;
  position: relative;
`;

const CenterIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CreateStudyPresenter = ({
  bootstrapURLKeys,
  address,
  coordinates,
  handleChange,
  handleSubmit,
  handleGetRealLocation,
  handleGetCurrentLocation,
  handleDragEnd,
}) => {
  return (
    <Container>
      <GoogleMapSearchBar
        address={address}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGetRealLocation={handleGetRealLocation}
        isCreatePage
      />
      <GoogleMapFrame>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          center={coordinates}
          zoom={15}
          onDragEnd={handleDragEnd}
        />
        <CenterIconBox>
          <AddIcon />
        </CenterIconBox>
      </GoogleMapFrame>
    </Container>
  );
};

export default CreateStudyPresenter;

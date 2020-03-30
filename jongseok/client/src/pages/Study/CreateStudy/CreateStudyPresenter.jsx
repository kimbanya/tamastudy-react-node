import React from 'react';
import GoogleMapSearchBar from '../../../components/molecules/GoogleMapSearchBar';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import AddIcon from '@material-ui/icons/Add';
import theme from '../../../theme';

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

const StudyForm = styled.form`
  width: 100%;
  background-color: red;
`;

const StudyInput = styled.input`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: ${theme.space * 2}px;
  margin: ${theme.space * 2}px 0;
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
  formData,
  handleFormChange,
  handleFormSubmit,
}) => {
  return (
    <Container>
      {/* Map */}
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
      {/* Create Form */}
      <StudyForm onSubmit={handleFormSubmit}>
        <StudyInput
          type="text"
          onChange={handleFormChange}
          name={'title'}
          value={formData.title}
          placeholder={'Study Title'}
        />
        <StudyInput
          type="text"
          onChange={handleFormChange}
          name={'description'}
          value={formData.description}
          placeholder={'Description'}
        />
        <StudyInput
          type="text"
          onChange={handleFormChange}
          name={'imgUrl'}
          value={formData.imgUrl}
          placeholder={'Image Url'}
        />
      </StudyForm>
    </Container>
  );
};

export default CreateStudyPresenter;

import React from 'react';
import GoogleMapSearchBar from '../../../components/molecules/GoogleMapSearchBar';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import AddIcon from '@material-ui/icons/Add';
import theme from '../../../theme';
import Button from '../../../components/atoms/Button';

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

const AddressBox = styled.div`
  text-align: center;
  margin: ${theme.space * 2}px 0;
  > h3 {
  }

  > p {
  }
`;

const StudyForm = styled.form`
  width: 100%;
  padding: ${theme.space}px 0;
`;

const StudyInput = styled.input`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding: ${theme.space * 2}px;
  &:not(:last-of-type) {
    margin-bottom: ${theme.space}px;
  }
  &:focus {
    border: 1px solid ${theme.colors.base.darkGrey};
  }
`;

const SubmitButton = styled(Button)`
  margin-top: ${theme.space}px;
  width: 100%;
  border-radius: 0;
`;

const CreateStudyPresenter = ({
  bootstrapURLKeys,
  address,
  coordinates,
  handleChange,
  handleSubmit,
  handleGetRealLocation,
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
      {/* 현재 위치 정보 */}
      <AddressBox>
        <h3>Current Location</h3>
        <p>{formData.address}</p>
      </AddressBox>
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
        <StudyInput
          type="number"
          onChange={handleFormChange}
          name={'minParticipant'}
          value={formData.minParticipant}
          placeholder={'최소 멤버 설정 (Min : 2명)'}
          min={2}
          max={19}
        />
        /
        <StudyInput
          type="number"
          onChange={handleFormChange}
          name={'maxParticipant'}
          value={formData.maxParticipant}
          placeholder={'최대 멤버 설정 (Max : 20명)'}
          min={2}
          max={20}
        />
        {/* 
        participant
        maxParticipant
        minParticipant
        */}
        <SubmitButton text={'Submit'} />
      </StudyForm>
    </Container>
  );
};

export default CreateStudyPresenter;

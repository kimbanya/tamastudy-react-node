import React, { useState } from 'react';
import GoogleMapSearchBar from '../../../components/molecules/GoogleMapSearchBar';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import AddIcon from '@material-ui/icons/Add';
import PlaceIcon from '@material-ui/icons/Place';
import theme from '../../../theme';
import Button from '../../../components/atoms/Button';
import useCutString from '../../../hooks/useCutString';

const Container = styled.div`
  position: relative;
`;

const GoogleMapFrame = styled.div`
  width: 100%;
  height: 80vw;
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

const GetStudiesPresenter = ({
  bootstrapURLKeys,
  address,
  coordinates,
  handleChange,
  handleSubmit,
  handleGetRealLocation,
  handleDragEnd,
  studies,
}) => {
  return (
    <Container>
      <GoogleMapSearchBar
        handleChange={handleChange}
        address={address}
        handleSubmit={handleSubmit}
        handleGetRealLocation={handleGetRealLocation}
      />
      <GoogleMapFrame>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          center={coordinates}
          zoom={15}
          onDragEnd={handleDragEnd}
        >
          {studies.map((study) => {
            const { _id, lat, lng } = study;
            return <AnyReactComponent key={_id} lat={lat} lng={lng} {...study} />;
          })}
        </GoogleMapReact>
        <CenterIconBox>
          <AddIcon />
        </CenterIconBox>
      </GoogleMapFrame>
    </Container>
  );
};

export default GetStudiesPresenter;

const MarkerContainer = styled.div`
  cursor: pointer;
  z-index: 100;
  > svg {
    position: absolute;
    top: -30px;
    left: -15px;
  }
`;

const MarkerDetail = styled.div`
  cursor: auto;
  position: absolute;
  top: -15px;
  left: -15px;
  width: 176px;
  height: 240px;
  box-sizing: border-box;
  padding: ${theme.space * 2 - 4}px;
  border-radius: 8px;
  box-shadow: 9px 10px 18px 0px rgba(0, 0, 0, 0.3);
  background-color: ${theme.colors.base.white};
  z-index: 200;

  display: grid;
  grid-gap: ${theme.space / 2}px;
  justify-content: center;
  overflow-x: auto;
  overflow-y: auto;

  scrollbar-width: none;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MarkerTitle = styled.h3`
  text-align: center;
`;
const MarkerAddress = styled.p``;
const MarkerDescription = styled.p``;

const MarkerButton = styled(Button)`
  width: 100%;
  padding: ${theme.space}px;
  font-size: 8px;
`;

const JoinButton = styled(MarkerButton)``;

const DetailButton = styled(MarkerButton)`
  margin-bottom: ${theme.space}px;
`;

const AnyReactComponent = ({ _id, title, description, imgUrl, address }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cutString } = useCutString();

  const handleModalControl = () => setIsModalOpen(!isModalOpen);

  return isModalOpen ? (
    <MarkerDetail>
      <MarkerTitle>{cutString(title, 18)}</MarkerTitle>
      <MarkerDescription>{cutString(description, 50)}</MarkerDescription>
      <MarkerAddress>{address}</MarkerAddress>
      <MarkerButton onClick={handleModalControl} text={'닫기'} noMargin />
      <JoinButton onClick={() => alert(_id)} text={'참가하기'} noMargin />
      <DetailButton onClick={() => alert(_id)} text={'자세히보기'} noMargin />
    </MarkerDetail>
  ) : (
    <MarkerContainer onClick={handleModalControl}>
      <PlaceIcon style={{ fontSize: 34, color: 'red' }} />
    </MarkerContainer>
  );
};

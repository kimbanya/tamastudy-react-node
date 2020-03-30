import React from 'react';
import GoogleMapSearchBar from '../../../components/molecules/GoogleMapSearchBar';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import AddIcon from '@material-ui/icons/Add';
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
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  z-index: 100;
  &:hover .gmap__marker-detail {
    cursor: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 196px;
    height: 240px;
    box-sizing: border-box;
    padding: ${theme.space * 2 - 4}px;
    border-radius: 8px;
    box-shadow: 9px 10px 18px 0px rgba(0, 0, 0, 0.3);
    background-color: ${theme.colors.base.white};
    z-index: 200;

    display: grid;
    grid-gap: ${theme.space}px;
    justify-content: center;
    overflow-x: auto;
    overflow-y: auto;
  }
`;

const MarkerDetail = styled.div`
  display: none;
`;

const MarkerTitle = styled.h3`
  text-align: center;
`;
const MarkerAddress = styled.p``;
const MarkerDescription = styled.p``;

const MarkerButton = styled(Button)`
  width: 100%;
  padding: ${theme.space}px;
`;

const JoinButton = styled(MarkerButton)``;

const DetailButton = styled(MarkerButton)``;

const AnyReactComponent = ({ _id, title, description, imgUrl, address }) => {
  const { cutString } = useCutString();

  return (
    <MarkerContainer>
      <MarkerDetail className={'gmap__marker-detail'}>
        <MarkerTitle>{cutString(title, 18)}</MarkerTitle>
        <MarkerDescription>{cutString(description, 50)}</MarkerDescription>
        <MarkerAddress>{address}</MarkerAddress>
        <JoinButton onClick={() => alert(_id)} text={'참가하기'} noMargin />
        <DetailButton onClick={() => alert(_id)} text={'자세히보기'} noMargin />
      </MarkerDetail>
    </MarkerContainer>
  );
};

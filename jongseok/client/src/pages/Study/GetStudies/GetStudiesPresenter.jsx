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
          <AnyReactComponent lat={35.6008195} lng={139.6126164} />
          <AnyReactComponent lat={35.6038195} lng={139.6126164} />
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  z-index: 100;
  &:hover .gmap__marker-detail {
    display: block;
  }
`;

const MarkerDetail = styled.p`
  display: none;
  z-index: 100;
`;

const AnyReactComponent = () => (
  <MarkerContainer>
    <MarkerDetail className={'gmap__marker-detail'}>디테일</MarkerDetail>
  </MarkerContainer>
);

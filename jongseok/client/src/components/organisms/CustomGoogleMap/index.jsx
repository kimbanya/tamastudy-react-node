import React from 'react';
import GoogleMapReact from 'google-map-react';
import useGoogleMap from '../../../hooks/useGoogleMap';
import PlaceIcon from '@material-ui/icons/Place';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';

const GoogleMapFrame = styled.div`
  width: 100%;
  height: 30vh;
  ${mediaQuery(1)} {
    width: 50vw;
  }
  position: relative;
`;

const MarkerContainer = styled.div`
  cursor: pointer;
  z-index: 100;
  > svg {
    position: absolute;
    top: -30px;
    left: -15px;
  }
`;

const CustomGoogleMap = ({ lat, lng }) => {
  const { bootstrapURLKeys, handleDragEnd } = useGoogleMap();
  return (
    <GoogleMapFrame>
      <GoogleMapReact
        bootstrapURLKeys={bootstrapURLKeys}
        center={{ lat, lng }}
        zoom={15}
        onDragEnd={handleDragEnd}
      >
        <AnyReactComponent lat={lat} lng={lng} />
      </GoogleMapReact>
    </GoogleMapFrame>
  );
};

export default CustomGoogleMap;

const AnyReactComponent = ({}) => {
  return (
    <MarkerContainer>
      <PlaceIcon style={{ fontSize: 34, color: 'red' }} />
    </MarkerContainer>
  );
};

import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  bootstrapURLKeys: any;
  handleDragEnd: any;
  geoInfo: {
    lat: number;
    lng: number;
    address: string;
  };
}

const Map = ({ bootstrapURLKeys, geoInfo, handleDragEnd }: Props) => {
  if (geoInfo.lat === 0 || geoInfo.lng === 0) return <div> Loading ...</div>;
  return (
    <section>
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          center={{ lat: geoInfo.lat, lng: geoInfo.lng }}
          defaultZoom={16}
          onDragEnd={handleDragEnd}
        />
        <Center>+</Center>
      </MapWrapper>
      <Address>
        <h4>Current Location</h4>
        <p>{geoInfo.address}</p>
      </Address>
    </section>
  );
};

export default Map;

const MapWrapper = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 8px;
  height: 8px;
`;

const Address = styled.div`
  margin-top: 16px;
  width: 100%;
  text-align: center;
`;

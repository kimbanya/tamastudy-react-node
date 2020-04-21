import GoogleMapReact from 'google-map-react';
import React from 'react';
import useGoogleMap from '../../../hooks/useGoogleMap';

interface Props {}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const GoogleMap = (props: Props) => {
  const { bootstrapURLKeys, coordinates } = useGoogleMap();
  if (coordinates.lat === 0 || coordinates.lng === 0) return <div> Loading ...</div>;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={bootstrapURLKeys}
        defaultCenter={coordinates}
        defaultZoom={11}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

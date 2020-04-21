import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GOOGLE_MAP_KEY } from '../keys';
import { geoCode } from '../utils/mapHelpers';

const useGoogleMap = () => {
  const bootstrapURLKeys = {
    // key: 'GOOGLE_MAP_KEY',
    key: GOOGLE_MAP_KEY,
    language: 'kr',
  };

  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const [address, setAddress] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, () => {});
  }, []);

  const handleGetRealLocation = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, () => {});
  };

  const handleGeoSuccess = (data: any) => {
    setCoordinates({
      lat: data.coords.latitude,
      lng: data.coords.longitude,
    });
  };

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleDragEnd = (data: any) => {
    setCoordinates({ lat: data.center.lat(), lng: data.center.lng() });
  };

  const handleSearchBarSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        e.preventDefault();
        const response: any = await geoCode(address);
        setCoordinates({
          lat: response.lat,
          lng: response.lng,
        });
        setAddress('');
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    bootstrapURLKeys,
    coordinates,
    address,
    handleSearchBarChange,
    handleSearchBarSubmit,
    handleDragEnd,
    handleGetRealLocation,
  };
};

export default useGoogleMap;

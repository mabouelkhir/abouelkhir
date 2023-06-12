import React from 'react';
import { Marker } from '@react-google-maps/api';

const CustomMarker = ({ position }) => {
  return <Marker position={position} />;
};

export default CustomMarker;

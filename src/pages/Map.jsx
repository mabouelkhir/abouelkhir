
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const Map = ({ markerPosition }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-ET_XYIjc2cTZGKjUhbIEvDSN5pHRenI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={12}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

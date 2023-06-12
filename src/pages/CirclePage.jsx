import React, { useState } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 33.236353,
  lng: -8.5007043
};

const CirclePage = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circle) => {
    setSelectedCircle(circle);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-ET_XYIjc2cTZGKjUhbIEvDSN5pHRenI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Circle
          center={center}
          radius={1500} // Specify the radius of the circle in meters
          options={{
            fillColor: '#FF0000',
            fillOpacity: 0.4,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            clickable: true,
          }}
          onClick={() => handleCircleClick(center)}
        />

        {selectedCircle && (
          <p>
            Selected Circle: ({selectedCircle.lat}, {selectedCircle.lng})
          </p>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default CirclePage;

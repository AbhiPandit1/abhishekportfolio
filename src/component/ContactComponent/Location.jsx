import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const ChangeView = ({ position, zoomLevel }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, zoomLevel, { animate: true });
  }, [position, zoomLevel, map]);

  return null;
};

const Location = () => {
  const [location, setLocation] = useState('UK'); 
  const [zoomLevel, setZoomLevel] = useState(10); 

  
  const ukPosition = [51.5074, -0.1278]; 
  const indiaPosition = [12.9716, 77.5946]; 

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  
  const position = location === 'India' ? indiaPosition : ukPosition;
  const locationName = location === 'India' ? 'Bangalore' : 'London';

  
  useEffect(() => {
    if (location === 'India') {
      setZoomLevel(13); 
    } else {
      setZoomLevel(13); 
    }
  }, [location]);

  return (
    <div className="location-container mb-10 p-5 bg-gray-900 rounded-lg shadow-lg">
      <div className="location-selector mb-5 flex justify-between items-center">
        <label className="font-bold text-xl">Select Location:</label>
        <select
          value={location}
          onChange={handleLocationChange}
          className="px-4 py-2 border rounded-lg "
        >
          <option value="India" className="text-white">
            India
          </option>
          <option value="UK" className="text-white">
            UK
          </option>
        </select>
      </div>

      <MapContainer
        center={position}
        zoom={zoomLevel}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView position={position} zoomLevel={zoomLevel} />
        <Marker position={position}>
          <Popup>This is {locationName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;

import React from 'react';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useControl } from 'react-map-gl';

const Geocoder: React.FC = () => {
    const geocoder = new MapBoxGeocoder({
        accessToken: process.env.MAP_BOX_ACCESS_TOKEN || '',
        marker:false,
        collapsed:true
      });
      useControl(() => geocoder)
      geocoder.on('result',(e) => {
        const coords = e.result.geometry.coordinates;
        console.log(coords)
      })
  return null
}

export default Geocoder

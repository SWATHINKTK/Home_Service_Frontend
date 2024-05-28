import React from 'react';
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MapRef, useControl } from 'react-map-gl';
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import { updateLocation } from '../../../reducers/user/userLocationSlice';

interface GeocoderProb{
	mapRef: React.RefObject<MapRef>
}

const Geocoder: React.FC<GeocoderProb> = ({ mapRef }) => {
	const dispatch = useAppDispatch();

	const geocoder = new MapBoxGeocoder({
		accessToken: process.env.MAP_BOX_ACCESS_TOKEN || '',
		marker: true,
		collapsed: true
	});
	useControl(() => geocoder)
	geocoder.on('result', (e) => {
		const coords = e.result.geometry.coordinates;
		dispatch(updateLocation({
			latitude: coords[1],
			longitude: coords[0]
		}));
		mapRef.current?.flyTo({center: [coords[0], coords[1]], zoom:14})
		console.log(coords)
	})
	return null
}

export default Geocoder

import React, { useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import ReactMapGL, { GeolocateControl, MapRef, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './map.css'

import Geocoder from "./Geocoder";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { updateLocation } from "../../../reducers/user/userLocationSlice";


const LocationSelecting: React.FC = () => {
    const mapRef = useRef<MapRef | null>(null);
    const { latitude, longitude } = useAppSelector((state) => state.location);
    const dispatch = useAppDispatch();

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
            enableHighAccuracy: true
        });

        function successLocation(position: GeolocationPosition) {
            dispatch(updateLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }))
            mapRef.current?.flyTo({ center: [position.coords.longitude, position.coords.latitude], zoom: 14 })
        }
        function errorLocation() {
            // alert('error')
        }


    }

    return (
        <ReactMapGL
            ref={mapRef}
            initialViewState={{
                latitude: latitude,
                longitude: longitude,
                zoom: 12
            }}
            attributionControl={false}
            mapboxAccessToken={import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN || ''}
            mapStyle='mapbox://styles/mapbox/streets-v12'
            onLoad={() => fetchLocation()}
            onDblClick={(e) => dispatch(updateLocation({ latitude: e.lngLat.lat, longitude: e.lngLat.lng }))}
        >
            <Marker
                latitude={latitude}
                longitude={longitude}
                draggable
                onDrag={(e) => dispatch(updateLocation({ latitude: e.lngLat.lat, longitude: e.lngLat.lng }))}
            >
                <FaLocationDot size={30} color='red' />
                <NavigationControl position="bottom-right" />
                <GeolocateControl
                    position="top-left"
                    trackUserLocation={true}
                    onError={(error) => console.error("Geolocation error:", error)}
                    onGeolocate={(position) => {
                        if (position.coords) {
                            dispatch(updateLocation({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            }));
                        } else {
                            console.error("Geolocation position data not available");
                        }
                    }} />
            </Marker>
            <Geocoder mapRef={mapRef} />
        </ReactMapGL>
    );
};

export default LocationSelecting;

import React, { useRef } from "react";
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import ReactMapGL, { GeolocateControl, MapRef, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './map.css'
import Geocoder from "./Geocoder";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { updateLocation } from "../../../reducers/user/userLocationSlice";


const LocationSelecting: React.FC = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const mapRef = useRef<MapRef | null>(null);
    const { latitude, longitude } = useAppSelector((state) =>  state.location);
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
            mapRef.current?.flyTo({ center: [position.coords.longitude, position.coords.latitude], zoom:14 })
        }
        function errorLocation(){
            alert('error')
        }
        

    }

    return (
        <>
            <div className="max-w-7xl mx-auto  px-3 pt-28 pb-5">
                <div className="flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-green-800 bg-slate-200">
                        <TiTick size={30} color='green' />
                    </div>
                    <div className="bg-green-800 h-[3px] text-xs rounded-full w-[40%]" ></div>
                    <div className="h-8 w-8  rounded-full flex items-center justify-center border-2 border-blue-600 bg-slate-200">
                        <FaLocationDot size={23} />
                    </div>
                    <div className="bg-slate-400 h-[3px] text-xs rounded-full w-[40%]" ></div>
                    <div className="h-8 w-8  rounded-full flex items-center justify-center border-2 border-slate-400 bg-slate-200">
                        <GoDotFill size={23} />
                    </div>
                </div>
            </div>

            <div className="max-w-5xl  mx-auto  h-[60vh] px-3">
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
                    <Geocoder mapRef={mapRef}/>
                </ReactMapGL>
            </div>

            <div className="max-w-5xl  mx-auto flex justify-between my-4 font-Montserrat px-3">
                <button className="flex justify-center items-center duration-200 transform hover:-translate-x-2" onClick={() => navigate(`/service/${serviceId}`)}>
                    <IoIosArrowDropleft size={30} />
                    <h5 className="mx-2 font-semibold text-lg">Back</h5>
                </button>
                <button className="flex justify-center items-center duration-200 transform hover:translate-x-2" onClick={() => navigate(`/service/${serviceId}/booking`)}>
                    <h5 className="mx-2 font-semibold text-lg">Next</h5>
                    <IoIosArrowDropleft className="rotate-180" size={30} />
                </button>
            </div>
        </>
    );
};

export default LocationSelecting;

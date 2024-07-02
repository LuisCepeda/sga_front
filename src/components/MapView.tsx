'use client'

import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

import { useProjectData } from '@/context/projectContext';

// import MarkerClusterGroup from "react-leaflet-markercluster";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

function Map() {
    const { projects, coordsCenter } = useProjectData()

    return (
        <>
            {
                projects && coordsCenter ?


                    <div className='w-full h-[300px]  md:h-[400px] md:w-[500px] '>
                        <MapContainer center={coordsCenter}
                            zoom={8}
                            maxZoom={15}
                            scrollWheelZoom={true}
                            // style={{ height: '400px', width: '500px' }}
                            className='w-full h-full'
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MarkerClusterGroup zoomToBoundsOnClick={true} spiderfyOnEveryZoom={false}>
                                {
                                    projects?.map((project) => (
                                        <Marker key={project._id} position={[project.location.latitude_degrees, project.location.longitude_degrees]}>
                                        </Marker>
                                    ))
                                }
                            </MarkerClusterGroup>
                        </MapContainer>
                    </div>
                    : <p>Cargando...</p>

            }
        </>
    )
}

export default Map
'use client'

import { useState } from 'react';
import axios from 'axios';

function GeoClient() {
    const [city, setCity] = useState('');
    const [coordinates, setCoordinates] = useState(null);

    const handleGeocode = async () => {
        try {
            const response = await axios.get(`/api/geocode?city=${city}`);
            console.log(response)
            setCoordinates(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleGeocode}>Get coords</button>

            {coordinates && (
                <div>
                    LonName: {coordinates.name}, Latitude: {coordinates.lat}, Longitude: {coordinates.lng}, Place Id: {coordinates.google_place_id}
                </div>
            )}
        </div>
    );
}

export default GeoClient;
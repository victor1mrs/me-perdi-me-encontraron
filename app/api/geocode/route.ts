import axios from 'axios';


export const GET = async (request: Request) => {

    const APY_KEY = process.env.APY_KEY;

    try {

        const { searchParams } = new URL(request.url)
        const city = searchParams.get('city')

        // Make an API request to the geocoding service (e.g., Google Maps API)
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${APY_KEY}`
        );


        if (response.data.status === 'OK') {
            const loc = response.data.results[0];
            let latlon = loc.geometry.location
            latlon.google_place_id = loc.place_id
            return new Response(JSON.stringify(latlon), { status: 200 })
        } else {
            return new Response('Geocoding request failed', { status: 400 })
        }
    } catch (error) {
        return new Response('Internal server error', { status: 500 })
    }
}
import PetProfiles from '@/components/PetProfile'
import axios from 'axios'
import ProfileType from '@/components/PetProfile'

const mockedUsers: ProfileType[] = [
  {
    name: 'Juan',
    location: 'montevideo',
    details: 'This is just a mock',
    image: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Pedro',
    location: 'uganda',
    details: 'This is just just just another another another MOCK',
    image: '/peter.jpg'
  },
]

type ProfileType = {
  name: string
  location: string
  details: string
  image: string
}

type ProfilesProps = {
  searchParams: {
    location: string
    status: string
  }
}

type GeocodeData = {
  lat:  number,
  lng: number,
  google_place_id: string,
  name: string
}

const Profiles = async ({searchParams}: ProfilesProps) => {
  const {location, status} = searchParams
  const handleGeocode = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/geocode?city=${location}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  const res = await handleGeocode()
  if(res && res.lat && res.lng && res.google_place_id && res.name) {
    const {lat, lng, google_place_id, name}: GeocodeData = await handleGeocode()
    // const profiles = await axios.get(`http://127.0.0.1:3000/api/pets?lat=${lat}&long=${lng}&status=${status}`)
  }
  
  const profiles: ProfileType[] = mockedUsers;
  return <div>
    <PetProfiles profiles={profiles} />
  </div>
}

export default Profiles

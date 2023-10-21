import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const data = await db.pet.findMany()
  return NextResponse.json({ data })
}

export const POST = async (request: Request) => {
  const request_data = await request.json()
  let pet_location = await db.location.findUnique({
    where: { google_place_id: request_data.location.google_place_id },
  });

  // If the location doesn't exist, create it
  if (!pet_location) {
    pet_location = await db.location.create({
      data: {
        google_place_id: request_data.location.google_place_id,
        lat: request_data.location.lat,
        long: request_data.location.long,
        city_name: request_data.location.city_name, 
      },
    });
  }

  const pet = await db.pet.create({ 
    data: {
      name: request_data.name,
      date_found: request_data.date_found,
      locationId: pet_location.id,
      email:request_data.email,
      phone:request_data.phone,
      picture_url:request_data.picture_url,
      status: request_data.status,
    },
   })
  return NextResponse.json({ data: pet })
}

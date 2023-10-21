'use client'

import { useState } from 'react'
import Image from 'next/image'

export type ProfileType = {
  name: string
  location: string
  details: string
  image: string
}

export type ProfilesProps = {
  profiles: ProfileType[]
}

const PetProfiles = ({ profiles }: ProfilesProps) => {
  const [profileIdx, setProfileIdx] = useState(0)
  const swapProfile = () => {
    if (profileIdx === profiles.length - 1) {
      setProfileIdx(0)
    } else {
      setProfileIdx(profileIdx + 1)
    }
  }
  console.log(profiles)

  return (
    <div>
      <div className="mt-16 w-full relative">
        <div className=" w-full photo-and-buttons flex flex-col items-center justify-center ">
          <h1 className="text-4xl mb-12 font-semibold">
            ¿Puede ser la mascota que encontraste?
          </h1>
          <div className=" w-[442px] h-[442px]">
            <Image
              className="w-[442px] h-[442px] bg-zinc-300 rounded-[300px]"
              src={profiles[profileIdx].image}
              alt="Pet profile image"
              width={500}
              height={500}
            />
            <div className="w-20 h-20 bg-green-400 rounded-[100px] relative bottom-[75px] left-[300px]">
              <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 relative" />
              </div>
            </div>
            <button onClick={() => swapProfile()}>
              <div className="w-20 h-20 bg-neutral-400 rounded-[100px] relative bottom-[150px] left-[75px]">
                <div className="p-2 justify-center items-center gap-2.5 flex"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[20px] w-full block relative rounded-[300px]">
        <div className="details-and-data items-center justify-center">
          <div className="block h-[148px] flex-col justify-start items-center gap-1.5">
            <div className="justify-start items-center gap-2">
              <div className="text-center text-black text-base font-bold font-['Poppins'] leading-normal tracking-tight">
                {profiles[profileIdx].name}
              </div>
            </div>
            <div className="text-center">
              <span>
                Perdido en
                <br />
              </span>
              <span>{profiles[profileIdx].location}</span>
            </div>
            <div className="text-center">
              <span>
                Detalles
                <br />
              </span>
              <span>{profiles[profileIdx].details}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetProfiles

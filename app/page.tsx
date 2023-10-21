import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/instagram', label: 'Instagram' },
  { href: '/new-user', label: 'Register' },
  { href: '/profiles', label: 'Profiles' },
]

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen w-1/2 bg-primary">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col gap-4 w-3/4">
            <div className="flex mb-12 gap-4">
              <Image
                src="/logo.svg"
                width={56}
                height={56}
                alt="FinPet mini logo"
              />
              <h1 className="text-white font-bold md:text-6xl text-xl">FindPet</h1>
            </div>
            <h3 className="text-white font-bold md:text-4xl text-xl mb-12">
              Elegí una de las opciones
            </h3>
            <Link href={'/new-user'}>
              <div className="flex items-center w-full md:p-10 p-4 bg-secondary min-h-fit h-52 mb-4 rounded-xl">
                <p className="text-white md:text-4xl text-xl font-semibold">
                  Encontré una mascota perdida
                </p>
              </div>
            </Link>
            <Link href={'/profiles'}>
              <div className="flex items-center w-full md:p-10 p-4 bg-secondary min-h-fit h-52 mb-4 rounded-xl">
                <p className="text-white md:text-4xl text-xl font-semibold">
                  Perdí mi mascota
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <div>
          <Image
            src="/logo.svg"
            width={240}
            height={240}
            alt="FinPet logo"
            style={{ opacity: 0.6 }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  )
}

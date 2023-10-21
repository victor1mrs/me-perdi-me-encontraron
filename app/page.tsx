import Link from "next/link"

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
          <div className="w-half"></div>
          <div className="text-white font-bold text-6xl">FindPet</div>
          <div className="text-white font-bold text-2xl">Elegí una de las opciones</div>
          <Link href={'/new-user'}>
            <div className="w-full p-4 bg-secondary min-h-6 mb-4">
              <p>Encontré una mascota perdida</p>
            </div>
          </Link>
          <Link href={'/profiles'}>
            <div className="w-full p-4 bg-secondary min-h-6 mb-4">
              <p>Perdí mi mascota</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="m-auto">
        <div>
          <ul className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary font-bold text-xl">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

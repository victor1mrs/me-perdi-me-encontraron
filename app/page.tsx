import Link from "next/link"

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/instagram', label: 'Instagram' },
  { href: '/new-user', label: 'Register' },
  { href: '/profiles', label: 'Profiles' },
]

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen w-1/2 bg-primary">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-white font-bold text-6xl">MascoTinder</div>
          <div className="text-white font-bold text-2xl">Find your pet's soulmate</div>
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

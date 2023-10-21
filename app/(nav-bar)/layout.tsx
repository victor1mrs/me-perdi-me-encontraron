import Link from 'next/link'
import Image from 'next/image'

// TODO: modify 'I lost a Pet link'
const links = [
  { href: '/new-pet-found', label: 'New Pet Found' },
  { href: '/new-pet-found', label: 'I Lost a Pet' },
  { href: '/profiles', label: 'List Pets' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className="bg-primary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'} className="text-white font-bold text-3xl flex gap-2">
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="FinPet mini logo"
            />
            <span>FindPet</span>
          </Link>
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white font-bold text-xl">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Link href="#" className="text-white">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="9" rx="1" width="7" x="3" y="3" />
                <rect height="5" rx="1" width="7" x="14" y="3" />
                <rect height="9" rx="1" width="7" x="14" y="12" />
                <rect height="5" rx="1" width="7" x="3" y="16" />
              </svg>
              <span className="sr-only">Dashboard</span>
            </Link>
            <Link href="#" className="text-white">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="sr-only">Users</span>
            </Link>
            <Link href="#" className="text-white">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="sr-only">Settings</span>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}

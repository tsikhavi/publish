import Link from 'next/link';
import Image from 'next/image';
import ModalLogin from './modal-login';
import ModalRegistration from './modal-registration';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ReactNode } from 'react';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClass = clsx(
    'font-semibold text-white transition hover:text-gray-100/75',
    { 'text-green-400': isActive },
  );

  return (
    <li>
      <Link href={href} className={linkClass}>
        {children}{' '}
      </Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <header className="bg-shark-950 px-20">
      <div className="mx-auto flex h-12 max-w-screen-xl items-center gap-8 px-4 py-2 sm:px-6 sm:py-6 lg:px-8">
        <Link className="block" href="#">
          <span className="sr-only">Home</span>
          <Image
            src="/freesell-logo.png"
            width={720}
            height={480}
            alt="logo"
            className="h-3 w-auto"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-xs tracking-normal">
              <NavLink href={'/dashboard'}>Стать продавцом</NavLink>
              <NavLink href={'/'}>Помощь</NavLink>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ModalLogin />

              <ModalRegistration />
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

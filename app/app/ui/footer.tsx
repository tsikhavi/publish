import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-30 flex-auto bg-shark-950 px-20">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" href="#">
          <span className="sr-only">Home</span>
          <Image
            src="/logo.png"
            width={600}
            height={600}
            alt="logo"
            className="h-10 w-full"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm">
              <li className="font-regular text-xs text-white transition hover:text-gray-100/75">
                2024 Freesell
              </li>
              <li>
                <Link
                  className="font-regular text-xs text-white transition hover:text-gray-100/75"
                  href="#"
                >
                  Политика конфиденциальности{' '}
                </Link>
              </li>

              <li>
                <Link
                  className="font-regular text-xs text-white transition hover:text-gray-100/75"
                  href="#"
                >
                  Политика Cookie{' '}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-8 text-sm">
                  <li>
                    <Link
                      className="font-regular text-xs text-white transition hover:text-gray-100/75"
                      href="#"
                    >
                      Стать продавцом{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-regular text-xs text-white transition hover:text-gray-100/75"
                      href="#"
                    >
                      Помощь{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="font-regular text-xs text-white transition hover:text-gray-100/75"
                      href="#"
                    >
                      Предложения{' '}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 flex gap-2">
          <Link className="block" href="#">
            <span className="sr-only">главная</span>
            <Image
              src="/Images/discord.png"
              width={600}
              height={600}
              alt="logo"
              className="h-auto w-full"
            />
          </Link>
          <Link className="block" href="#">
            <span className="sr-only">главная</span>
            <Image
              src="/Images/vk-icon.png"
              width={24}
              height={24}
              alt="logo"
              className="h-auto w-full"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

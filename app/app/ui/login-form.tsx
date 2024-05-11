'use client';

import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';

export default function LoginForm() {
  //const [errorMessage, dispatch] = useFormState(undefined);

  return (
    <form action="" className="space-y-3">
      <div className="flex-1 rounded-md bg-[#343434]/90 px-6 py-4">
        <div className="h-30 w-full">
          <div className="mb-2">
            <label
              className=" mt-4 block text-[12px] font-medium text-[#C1C1C1]"
              htmlFor="email"
            >
              Логин или email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-xl bg-[#606060] py-[6px] pl-2 text-sm ring-1 ring-[#606060] focus:ring-2 focus:ring-inset focus:ring-[#64D28B] sm:text-sm"
                id="email"
                type="email"
                name="email"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              className="mt-4 block text-xs font-medium text-[#C1C1C1]"
              htmlFor="password"
            >
              Пароль
            </label>
            <div className="relative ">
              <input
                className="peer block w-full rounded-xl bg-[#606060] py-[6px]
                 pl-2 text-sm ring-1 ring-[#606060] focus:bg-[#606060] focus:ring-2 focus:ring-inset focus:ring-[#64D28B] sm:text-sm"
                id="password"
                type="password"
                name="password"
                placeholder=""
                required
                minLength={6}
              />
            </div>
          </div>
          <div className="relative mt-3 flex flex-row">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="inline-flex rounded border-2 bg-inherit text-[#64D28B] ring-0 
                 ring-[#64D28B] focus:ring-1 focus:ring-inset focus:ring-[#64D28B] "
              />
              <label
                htmlFor="link-checkbox"
                className="inlne-flex ms-2 mt-1 text-sm font-medium text-[#64D28B]  "
              >
                Запомнить меня{' '}
              </label>
            </div>

            <Link
              href="#"
              className="float-right ml-4 mt-1 text-right text-sm text-[#EBEBEB] 
              underline-offset-4 hover:text-[#64D28B] hover:underline "
            >
              Забыли пароль?
            </Link>
          </div>
        </div>
      </div>
      <LoginButton />

      {/* <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{/*errorMessage</p>
            </>
          )}
      </div>*/}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        className="mx-auto my-2 w-[1/3] rounded-md bg-[#64D28B] px-[54px] py-3 text-xs font-semibold tracking-wide hover:bg-[#64D28B]/75"
        aria-disabled={pending}
      >
        Войти
      </Button>
      <Button
        className="mx-auto my-2 w-[1/3] rounded-md bg-none px-[54px] py-3 text-xs font-semibold tracking-wide underline-offset-4 hover:underline"
        aria-disabled={pending}
      >
        Регистрация
      </Button>
    </>
  );
}

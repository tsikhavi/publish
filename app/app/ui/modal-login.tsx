import React, { useState } from 'react';
import LoginForm from './login-form';
import { Button } from './button';
import Image from 'next/image';

const ModalLogin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="block rounded-lg bg-[#64D28B] px-4 py-2 align-middle text-sm font-semibold text-white transition hover:bg-[#64D28B]/70"
      >
        Войти
      </button>

      {isOpen && (
        <div
          className="overflow-none fixed inset-0 z-40 mt-2 overflow-hidden"
          onClick={closeModal}
        >
          <div className="flex  items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[#000000]/75"></div>
            </div>

            <div
              className="sm:w-100 inline-block h-[70%] transform overflow-hidden rounded-lg bg-[#343434]/90 text-left align-middle shadow-xl transition-all sm:my-8 sm:max-w-lg sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#343434]/90 px-4 py-4  ">
                <h1
                  className={`mb-3 pl-6 text-2xl text-lg font-semibold leading-6 text-white`}
                  id="modal-headline"
                >
                  Войдите в свой аккаунт
                </h1>
                <div className=" mt-1">
                  <div className="ml-6 mr-6 ">
                    <GoogleAuth />
                    <DiscordAuth />
                    <TelegramAuth />
                  </div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalLogin;

function GoogleAuth() {
  return (
    <Button className="mt-2 h-10 w-full bg-[#4E4E4E] text-xs tracking-wide hover:bg-[#4E4E4E]/75 ">
      <Image
        src="/Images/google-auth.png"
        width={24}
        height={24}
        alt="google-auth"
        className="h-6 w-auto px-2"
      />
      Войти с помощью Google
    </Button>
  );
}

function DiscordAuth() {
  return (
    <Button className="mt-2 h-10 w-full bg-[#5869EB] hover:bg-[#5869EB]/75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-flex h-6 w-auto px-2 text-[#F0F0F0]"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
      </svg>
      Войти через Discord
    </Button>
  );
}

function TelegramAuth() {
  return (
    <Button className="mt-2 h-10 w-full bg-[#4197E6] hover:bg-[#4197E6]/75">
      <Image
        src="/Images/telegram-auth.png"
        width={720}
        height={480}
        alt="telegram-auth"
        className="h-6 w-auto px-2"
      />
      Войти через Telegram
    </Button>
  );
}

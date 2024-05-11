import React, { useState } from 'react';
import LoginForm from './login-form';
import { Button } from './button';
import Image from 'next/image';
import RegistrationForm from './registration-form';

const ModalRegistration: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=''>
      <button
        onClick={handleClick}
        className="hover:shark-600/75 hidden rounded-md bg-inherit px-5 py-2.5 text-sm font-semibold text-white transition hover:text-gray-100/75 sm:block"
      >
        Регистрация
      </button>

      {isOpen && (
        <div
          className="overflow-none fixed inset-0 z-40 w-80 mx-auto mt-2 overflow-hidden"
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
                  className={`mb-2 pl-6 text-center text-2xl text-lg font-semibold leading-6 text-white`}
                  id="modal-headline"
                >
                  Регистрация
                </h1>
                <div className=" mt-1">
                  <div className="ml-6 mr-6 "></div>
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalRegistration;

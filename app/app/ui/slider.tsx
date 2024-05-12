import React, { useState } from 'react';

type DivData = {
  title: string;
  text: string;
};

const Slider = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const divs: DivData[] = [
    {
      title: 'Начни продавать в один клик',
      text: 'Публикуйте свои предложения и зарабатывайте',
    },
    { title: 'Начни продавать', text: 'Публикуйте свои 1' },
    { title: 'Начни продавать', text: 'Публикуйте свои 2' },
    { title: 'Начни продавать', text: 'Публикуйте свои 3' },
  ];

  const handlePrev = () => {
    setCurrentDiv((prev) => (prev > 0 ? prev - 1 : divs.length - 1));
  };

  const handleNext = () => {
    setCurrentDiv((prev) => (prev < divs.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      <div className="relative mx-[272px] mt-44  h-80 rounded-md bg-gradient-to-r from-[#434343] to-[#255536] p-6">
        <div className="absolute -right-2 -top-10 flex space-x-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-[#F6FBFF]/75 bg-none p-2 hover:border-[#F6FBFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-[#F6FBFF]"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-[#F6FBFF]/75 bg-none p-2 hover:border-[#F6FBFF]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-[#F6FBFF]"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-white">
          {divs[currentDiv].title}
        </h1>
        <p className="mb-4 mt-20 text-xs text-white">{divs[currentDiv].text}</p>
        <button className="mt-20 w-[1/3] rounded-[5px] bg-emerald-400 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#F3F3F3] hover:bg-emerald-400/75">
          Стать продавцом
        </button>
      </div>
      <div className="mb-20 mt-4 flex justify-center space-x-2">
        {divs.map((_: DivData, index: number) => (
          <div
            key={index}
            className={`h-1 w-3 rounded-full ${index === currentDiv ? 'bg-emerald-400/50' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Slider;

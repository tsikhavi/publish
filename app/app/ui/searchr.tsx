import React, { useState } from 'react';

const SearchR = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Your logic to fetch search results goes here
    // For demonstration purposes, I'll just filter a hardcoded array
    const filteredResults = ['Result 1', 'Result 2', 'Result 3'].filter(
      (item) => item.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="flex-shrink-2 relative mx-60 flex h-16 flex-1 py-2">
      <label htmlFor="Search" className="sr-only">Search</label>

      <input
        type="text"
        id="Search"
        placeholder="Поиск"
        className="placeholder:font-regular w-full rounded-full border-none bg-[#343434]/90 px-4 py-2.5 pe-10
         text-white shadow-sm placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#64D28B] sm:text-sm"
        value={searchTerm}
        onChange={handleSearch}
      />

      <span className="absolute inset-y-0 end-0 mx-0 my-2 grid w-10 place-content-center rounded-3xl bg-[#64D28B] px-8 py-2">
        <button type="button" className=" text-white hover:text-white ">
          <span className="sr-only">Поиск</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 hover:text-[#343434] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-10 mt-0 rounded-md bg-[#323232] text-left text-white shadow-lg">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-[#606060]"
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchR;

import React, { useState } from "react";
import { DocumentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [results, setResults] = useState([]);

  // Mock search function to update results
  const handleSearch = (event) => {
    // Mock results, replace this with actual search logic
    setResults([
      { id: 1, title: "Product Title" },
    //   { id: 2, title: "Product Title 2" },
    //   { id: 3, title: "Product Title 3" },
    //   { id: 4, title: "Product Title 4" },
    ]);
  };

  return (
    <div>
      <label htmlFor="lotNo" className="block text-sm font-medium leading-6 text-gray-600">
        Enter your lot number
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">L
            {/* starting format for the UDI */}
          </div>
          <input
            id="lotNo"
            name="lotNo"
            type="text"
            placeholder="XXXXX"
            onChange={handleSearch}
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="button"
          onClick={handleSearch}
          className="rounded-none rounded-r-md relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
        >
          <MagnifyingGlassIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
          Search
        </button>
      </div>
      <div className="mt-6 w-full flex justify-center">
        {/* <div className="p-4 shadow-md rounded-md w-full lg:w-auto"> */}
          {results.map((result) => (
            <div key={result.id} className="p-4 shadow-md rounded-md w-full lg:w-auto flex items-center gap-x-4 py-2">
              <DocumentIcon className="h-6 w-6 text-gray-600" />
              <h5 className="text-lg font-medium text-gray-900">{result.title}</h5>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default SearchBar;

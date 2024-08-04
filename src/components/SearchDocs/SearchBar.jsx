import React, { useState } from "react";
import { DocumentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AirtableDocuments from "../common/Airtable/AirtableDocumentation";

const SearchBar = () => {
  const [lotNo, setLotNo] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [noRecordsFound, setNoRecordsFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isSearchInitiated, setIsSearchInitiated] = useState(false); // State to track search initiation

  const handleInputChange = (event) => {
    setLotNo(event.target.value);
    setNoRecordsFound(false); // Reset the message on input change
    setErrorMessage(""); // Reset error message on input change
    setIsSearchInitiated(false); // Reset search initiation state on input change
  };

  const handleSearch = () => {
    // Validate that the lotNo is exactly 5 digits
    if (!/^\d{5}$/.test(lotNo)) {
      setErrorMessage("Please enter your 5 digit lot number");
      return; // Exit if the validation fails
    }

    setIsSearchInitiated(true); // Mark that search has been initiated
    setSearchTrigger((prev) => !prev); // Toggle to re-fetch Airtable data
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Run search on Enter key press
    }
  };

  const renderDocumentation = (post) => (
    <div key={post.id} className="mt-6 w-full flex justify-center">
      <div className="p-4 shadow-md rounded-md w-full lg:w-auto flex items-center gap-x-4 py-2">
        <DocumentIcon className="h-6 w-6 text-gray-600" />
        <h5 className="text-lg font-medium text-gray-900">{post.fields.Device}</h5>
      </div>
    </div>
  );

  return (
    <div>
      <label htmlFor="lotNo" className="block text-sm font-medium leading-6 text-gray-600">
        Enter your lot number:
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            L {/* starting format for the UDI */}
          </div>
          <input
            id="lotNo"
            name="lotNo"
            type="text"
            placeholder="XXXXX"
            value={lotNo}
            onChange={handleInputChange} // Updates lotNo but does not trigger search
            onKeyDown={handleKeyDown} // Triggers search on Enter key press
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="button"
          onClick={handleSearch} // This is the only place that triggers the search
          className="rounded-none rounded-r-md relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
        >
          <MagnifyingGlassIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
          Search
        </button>
      </div>
      {/* Only render AirtableDocuments if the search has been initiated */}
      {isSearchInitiated && /^\d{5}$/.test(lotNo) && (
        <AirtableDocuments
          key={searchTrigger} // Re-fetches data when searchTrigger changes
          tableName="Documentation"
          view="Grid view"
          renderItem={renderDocumentation}
          setNoRecordsFound={setNoRecordsFound} // Pass the function to set the no records state
          filterByFormula={`{lotNo} = '${lotNo}'`} // Pass the filter formula to Airtable
        />
      )}
      {noRecordsFound && (
        <p className="mt-4 text-red-500">No records found for lot number: {lotNo}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-500">{errorMessage}</p> // Display error message
      )}
    </div>
  );
};

export default SearchBar;

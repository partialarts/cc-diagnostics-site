import SearchBar from "./SearchBar";

export default function SearchCTA() {
  return (
    <div id="searchCTA" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
          Already purchased?
          <br />
          Download your documentation
        </h2>
        <div className="mt-10 flex flex-col items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

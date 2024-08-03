
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchBar() {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600">
        enter your lot number
      </label>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">L
            {/* <UsersIcon aria-hidden="true" className="h-5 w-5 text-gray-400" /> */}
          </div>
          <input
            id="lotNo"
            name="lotNo"
            type="interger"
            placeholder="XXXXX"
            className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="button"
          className="rounded-none rounded-r-md relative -ml-px inline-flex items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
        >
          <MagnifyingGlassIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
          Search
        </button>
      </div>
    </div>
  )
}

import React from 'react';
import {
  ClockIcon,
  CheckBadgeIcon,
  UsersIcon,
  BeakerIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

export default function Flow() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Methica CC Kit Workflow
            </p>
          </div>
        </div>

<div className='py-24 sm:py-24'>

{/* section 1 */}
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg mx-auto max-w-7xl sm:px-2  lg:px-4">
          <div className="rounded group relative bg-white p-6 flex flex-col lg:flex-row w-full">
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-ccAliceBlue rounded">
              <span className="text-ccDarkBlue inline-flex rounded-lg p-4 gap-12">
                <BeakerIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowLongRightIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowPathIcon aria-hidden="true" className="h-12 w-12" />
              </span>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 pl-4 bg-ccAliceBlue rounded py-4">
              <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">
                <span aria-hidden="true" className="absolute inset-0" />
                Descriptive Title
              </h3>
              <p className="text-sm text-gray-500">
                This is a brief description of the stage 1 process.
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg mx-auto max-w-7xl sm:px-2  lg:px-4">
          <div className="rounded group relative bg-white p-6 flex flex-col lg:flex-row w-full">
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-ccAliceBlue rounded">
              <span className="text-ccDarkBlue inline-flex rounded-lg p-4 gap-12">
                <BeakerIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowLongRightIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowPathIcon aria-hidden="true" className="h-12 w-12" />
              </span>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 pl-4 bg-ccAliceBlue rounded py-4">
              <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">
                <span aria-hidden="true" className="absolute inset-0" />
                Descriptive Title
              </h3>
              <p className="text-sm text-gray-500">
                This is a brief description of the stage 1 process.
              </p>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg mx-auto max-w-7xl sm:px-2  lg:px-4">
          <div className="rounded group relative bg-white p-6 flex flex-col lg:flex-row w-full">
            <div className="flex items-center justify-center w-full lg:w-1/2 bg-ccAliceBlue rounded">
              <span className="text-ccDarkBlue inline-flex rounded-lg p-4 gap-12">
                <BeakerIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowLongRightIcon aria-hidden="true" className="h-12 w-12" />
                <ArrowPathIcon aria-hidden="true" className="h-12 w-12" />
              </span>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 pl-4 bg-ccAliceBlue rounded py-4">
              <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">
                <span aria-hidden="true" className="absolute inset-0" />
                Descriptive Title
              </h3>
              <p className="text-sm text-gray-500">
                This is a brief description of the stage 1 process.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

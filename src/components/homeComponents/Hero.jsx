'use client'
import DNA from '../homeComponents/DNA.jpeg'

export default function Hero() {

  return (
    <div className="bg-black-900">

      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt="DNA strand"
          src={DNA}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-40"></div> {/* Overlay */}

        <div className="m-20 max-w-2xl">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Superior Diagnostic Methods for Cervical Cancer Detection
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            At CC Diagnostics, we harness the power of medical advancements to improve the detection of cervical cancer. Our innovative solutions provide accurate and timely results, ensuring early intervention and better outcomes for patients.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

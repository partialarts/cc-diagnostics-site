import Methica_CC_prototype_2 from '../../../../src/assets/images/Methica_CC_prototype_2.jpg';

export default function Info() {
  return (
    <>
      <div className="relative bg-white">
        {/* 
        
        Version 1
        
        <div className="relative h-80 overflow-hidden bg-white md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt="Methica CC Prototype"
            src={Methica_CC_prototype_2}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-ccLightBlue">Methica CC Kit</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">Revolutionising Cancer Diagnostics</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div> */}


{/* version 2 */}

        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
              
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl">
                  Methica CC Kit
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                  Superior Diagnostic Methods for Cervical Cancer Detection
                  </p>
                  {/* <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
            <img
              alt="Methica CC Prototype"
              src={Methica_CC_prototype_2}
              className="aspect-[3/2] object-cover object-right scale-150 -translate-x-1/4 lg:aspect-auto lg:h-full lg:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

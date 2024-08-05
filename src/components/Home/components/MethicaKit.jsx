import { ArrowTrendingUpIcon, BeakerIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

import Methica_CC_prototype_2 from '../../../../src/assets/images/Methica_CC_prototype_2.jpg'

const supportLinks = [
  {
    name: '97%',
    href: '#',
    description:
      'Of cases detected using CC Diagnostics superior technology',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: '100%',
    href: '#',
    description:
      'Cervical cancer detected of 3421 samples',
    icon: ShieldCheckIcon,
  },
  {
    name: '6X',
    href: '#',
    description:
      'Times less hands on time of lab-technicians.',
    icon: BeakerIcon,
  },
]

export default function MethicaKit() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            alt="Methica Kit"
            src={Methica_CC_prototype_2}
            className="h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gray-800 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Methica CC Kit</h1>
          <p className="mt-6 text-xl text-gray-300 text-center">
          Revolutionary screening technology detecting cervical cancer early using novel epigenetic markers.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section aria-labelledby="contact-heading" className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8">
        <h2 id="contact-heading" className="sr-only">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-ccDarkBlue p-5 shadow-lg">
                  <link.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-ccDarkBlue hover:text-ccLightBlue">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

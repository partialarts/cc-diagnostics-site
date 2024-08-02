import { Fragment } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const tabs = [
  {
    name: 'Superior diagnostic performance',
    features: [
      {
        name: 'Superior diagnostic performance',
        description:
          'The Methica CC kit detects 97% of all cervical cancer cases, outperforming other triage techniques such as PAP-cytology test (where cancer detection is stuck at 76%).',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Compatible with multiple samples and qPCR cyclers',
    features: [
      {
        name: 'Compatible with multiple samples and qPCR cyclers',
        description:
          'Both liquid based cytology samples and self-collected samples can be examined with the Methica CC Kit. Currently the Methica CC Kit is validated with the LightCycler II platform (Roche). More multichannel quantitative PCR platforms will be added in 2024 and 2025 to increase implementation', 
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Automation Ready',
    features: [
      {
        name: "Automation Ready",
        description:
          'CC Diagnostics co-develops high throughput solutions for sample preparation, bisulfite treatment and analysis to deal with high volumes of HPV positive samples',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
];

export default function Tabs() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p>
          </div>

          <TabGroup className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <TabList className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-ccDarkBlue data-[selected]:text-ccDarkBlue"
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>

            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </div>
  );
}

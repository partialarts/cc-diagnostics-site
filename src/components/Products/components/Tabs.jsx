/* ---------------------------- Original ------------------------------------ */
// import { Fragment } from "react";
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import Airtable from "../../common/Airtable/Airtable";

// const tabName = (tabName) => {
//   return (
//     <Tab
//       key={tabName.id}
//       className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-ccDarkBlue data-[selected]:text-ccDarkBlue"
//     >
//       {tabName.fields.Title}
//     </Tab>
//   )
// }

/* ---------------------------- Original 2.2 ------------------------------------ */

// const tabFeatures = (tabFeatures) => {
//   return (
//     <div
//       key={tabFeatures.fields.Title}
//       className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
//     >
//       <div className="mt-6 lg:col-span-5 lg:mt-0">
//         <h3 className="text-lg font-medium text-gray-900">
//           {tabFeatures.fields.Title}
//         </h3>
//         <p className="mt-2 text-sm text-gray-500">
//           {tabFeatures.fields.Features}
//         </p>
//       </div>
//       <div className="lg:col-span-7">
//         <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
//           <img
//             alt="featured image"
//             src={tabFeatures.fields.Image[0].url}
//             className="object-cover object-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

/* ---------------------------- Original 2.1 ------------------------------------ */

// const tabName = (tabName) => {
//   return (
//     <Tab
//       key={tabName.id}
//       className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-white hover:border-gray-300 hover:text-white data-[selected]:border-ccDarkBlue data-[selected]:text-white"
//     >
//       {tabName.fields.Title}
//     </Tab>

    /* ---------------------------- My Attempt 1 ------------------------------------ */


    // <div className="bg-gray-100 p-5 pb-10 ">
    //   <h4 className="text-lg leading-6 font-semibold text-gray-900">
    //     <div key={tabName.id} className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-black hover:border-gray-300 hover:text-white data-[selected]:border-ccDarkBlue data-[selected]:text-white">
    //       {tabName.fields.Title.length > 0 ? tabName.fields.Title : tabName.fields.Title[0]}
    //     </div>
    //   </h4>
    // </div>
//   );
// };

/* ---------------------------- My Attempt 2 ------------------------------------ */


// const results = [];

// tabName.forEach(() => {
//   results.push(
//     <TabPanels as={Fragment}>
//       <TabPanel key={tabFeatures.id} className="space-y-16 pt-10 lg:pt-16">
//         <Airtable
//           tableName="TechnicalSpecifications"
//           view="Grid view"
//           renderItem={tabFeatures}
//         />
//       </TabPanel>
//     </TabPanels>
//   );
// });

// export default function Tabs() {
//   return (

    // <Airtable tableName="TechnicalSpecifications" view="Grid view" renderItem={tabName}/>

/* ---------------------------- My Attempt 3 ------------------------------------ */

    // <div className="bg-white">
    //   <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
    //     <div className="text-center">
    //       <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">STEPS</p>
    //       <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
    //         How it <span className="text-indigo-600">Works?</span>
    //       </h3>
    //     </div>

    //     <div className="mt-20">
    //       <ul className="">
    //         <li className="text-left mb-10">
    //           <div className="flex flex-row items-start">
    //             <div className="flex flex-col items-center justify-center mr-5">
    //               <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
    //                 <Airtable tableName="TechnicalSpecifications" view="Grid view" renderItem={tabName}/>
    //               </div>
    //               <span className="text-gray-500">STEP</span>
    //             </div>
    //             <div className="bg-gray-100 p-5 pb-10 ">
    //               <h4 className="text-lg leading-6 font-semibold text-gray-900">
    //               <Airtable tableName="TechnicalSpecifications" view="Grid view" renderItem={tabFeatures}/>
    //               </h4>
    //               <p className="mt-2 text-base leading-6 text-gray-500">
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Maiores impedit perferendis suscipit eaque, iste dolor
    //                 cupiditate blanditiis ratione.
    //               </p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="text-left mb-10">
    //           <div className="flex flex-row items-start">
    //             <div className="flex flex-col items-center justify-center mr-5">
    //               <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
    //                 2
    //               </div>
    //               <span className="text-gray-500">STEP</span>
    //             </div>
    //             <div className="bg-gray-100 p-5 pb-10 ">
    //               <h4 className="text-lg leading-6 font-semibold text-gray-900">
    //                 Enter Headline
    //               </h4>
    //               <p className="mt-2 text-base leading-6 text-gray-500">
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Maiores impedit perferendis suscipit eaque, iste dolor
    //                 cupiditate blanditiis ratione.
    //               </p>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="text-left mb-10">
    //           <div className="flex flex-row items-start">
    //             <div className="flex flex-col items-center justify-center mr-5">
    //               <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
    //                 3
    //               </div>
    //               <span className="text-gray-500">STEP</span>
    //             </div>
    //             <div className="bg-gray-100 p-5 pb-10 ">
    //               <h4 className="text-lg leading-6 font-semibold text-gray-900">
    //                 Enter Headline
    //               </h4>
    //               <p className="mt-2 text-base leading-6 text-gray-500">
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Maiores impedit perferendis suscipit eaque, iste dolor
    //                 cupiditate blanditiis ratione.
    //               </p>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    /* ---------------------------- Original 2 ------------------------------------ */

    // <div className="bg-white">
    //   <section
    //     aria-labelledby="features-heading"
    //     className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8"
    //   >
    //     <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
    //       <div className="max-w-3xl">
    //         <h2
    //           id="features-heading"
    //           className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    //         >
    //           Technical Specifications
    //         </h2>
    //         <p className="mt-4 text-gray-500">
    //           The Organize modular system offers endless options for arranging
    //           your favorite and most used items. Keep everything at reach and in
    //           its place, while dressing up your workspace.
    //         </p>
    //       </div>
    //       <TabGroup className="mt-4">
    //         <div className="-mx-4 flex overflow-x-auto sm:mx-0">
    //           <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
    //             <TabList className="-mb-px flex space-x-10">
    //               <Airtable
    //                 tableName="TechnicalSpecifications"
    //                 view="Grid view"
    //                 renderItem={tabName}
    //               />
    //             </TabList>
    //           </div>
    //         </div>
    //         {/* {results} */}
    //         <TabPanels as={Fragment}>
    //           <TabPanel key={tabFeatures.id} className="space-y-16 pt-10 lg:pt-16">
    //             <Airtable tableName="TechnicalSpecifications" view="Grid view" renderItem={tabFeatures} />
    //           </TabPanel>
    //         </TabPanels>
    //       </TabGroup>
    //     </div>
    //   </section>
    // </div>
//   );
// }

/* ---------------------------- Original ------------------------------------ */

// import { Fragment } from 'react';
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
// import Airtable from "../../common/Airtable/Airtable";

// const tabs = [
//   {
//     name: 'Superior diagnostic performance',
//     features: [
//       {
//         name: 'Superior diagnostic performance',
//         description:
//           'The Methica CC kit detects 97% of all cervical cancer cases, outperforming other triage techniques such as PAP-cytology test (where cancer detection is stuck at 76%).',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
//         imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
//       },
//     ],
//   },
//   {
//     name: 'Compatible with multiple samples and qPCR cyclers',
//     features: [
//       {
//         name: 'Compatible with multiple samples and qPCR cyclers',
//         description:
//           'Both liquid based cytology samples and self-collected samples can be examined with the Methica CC Kit. Currently the Methica CC Kit is validated with the LightCycler II platform (Roche). More multichannel quantitative PCR platforms will be added in 2024 and 2025 to increase implementation',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
//         imageAlt:
//           'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
//       },
//     ],
//   },
//   {
//     name: 'Automation Ready',
//     features: [
//       {
//         name: "Automation Ready",
//         description:
//           'CC Diagnostics co-develops high throughput solutions for sample preparation, bisulfite treatment and analysis to deal with high volumes of HPV positive samples',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
//         imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
//       },
//     ],
//   },
// ];

// const tabInfo = (info) => {
//   return (
//     <TabGroup className="mt-4">
//     <div className="-mx-4 flex overflow-x-auto sm:mx-0">
//       <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
//         <TabList className="-mb-px flex space-x-10">
//             <Tab
//               key={info.id}
//               className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-ccDarkBlue data-[selected]:text-ccDarkBlue"
//             >
//               {info.fields.Title}
//             </Tab>
//         </TabList>
//       </div>
//     </div>

//     <TabPanels as={Fragment}>
//         <TabPanel key={info.id} className="space-y-16 pt-10 lg:pt-16">
//             <div key={info.id} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
//               <div className="mt-6 lg:col-span-5 lg:mt-0">
//                 <h3 className="text-lg font-medium text-gray-900">{info.fields.Title}</h3>
//                 <p className="mt-2 text-sm text-gray-500">{info.fields.Features}</p>
//               </div>
//               <div className="lg:col-span-7">
//                 <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
//                   <img alt="" src={info.fields.Image[0].url} className="object-cover object-center" />
//                 </div>
//               </div>
//             </div>
//         </TabPanel>
//     </TabPanels>
//   </TabGroup>
//   );
// };

// export default function Tabs() {
//   return (
//     <div className="bg-white">
//       <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
//         <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
//           <div className="max-w-3xl">
//             <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Technical Specifications
//             </h2>
//             <p className="mt-4 text-gray-500">
//               The Organize modular system offers endless options for arranging your favorite and most used items. Keep
//               everything at reach and in its place, while dressing up your workspace.
//             </p>
//           </div>
//           <Airtable tableName="TechnicalSpecifications" view="" renderItem={tabInfo} />
//         </div>
//       </section>
//     </div>
//   );
// }

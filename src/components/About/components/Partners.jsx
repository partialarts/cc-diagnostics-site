import Airtable from "../../common/Airtable/Airtable";
import ContactHeavy from "../../common/ContactButtons/ContactHeavy";
// import eu_flag from "../../../assets/images/eu_flag.jpg"
import logo_erdf2014 from "../../../assets/images/logo_erdf2014.png"
const partnerLogo = (partner) => {

  return (
    <a
    href={partner.fields.Site}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
  >
<img
key={partner.id}
src={partner.fields.Logo && partner.fields.Logo.length > 0 ? partner.fields.Logo[0].url : placeholder} 
alt={partner.fields.Partner}
width={105}
height={48}
className="max-h-24 w-full object-contain object-center shadow-md"
/>
</a>
  );
};


// export default function Partners() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
//             <div className="mx-auto w-full max-w-xl lg:mx-0">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900">Meet our Partners</h2>
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
//                 scelerisque amet ullamcorper eu enim et fermentum, augue.
//               </p>
//               <div className="mt-8 flex items-center gap-x-6">
//                 <ContactHeavy/>
//               </div>
//             </div>
//             <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
//             <Airtable tableName="Partners" view="Grid view" renderItem={partnerLogo} />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
export default function Partners() {
  return (
    <div className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="pb-16 text-center text-3xl font-semibold leading-8 text-ccDarkBlue">
          Our Partners
        </h2>
        {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
       <Airtable tableName="Partners" view="Grid view" renderItem={partnerLogo} />
        </div> */}
        
<img
key=""
src={logo_erdf2014}
alt="Eurpoean Logo"
width={105}
height={48}
className="max-h-24 w-full object-contain object-center"
/>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >

<Airtable tableName="Partners" view="Grid view" renderItem={partnerLogo} />
        </ul>
      </div>
    </div>
  )
}

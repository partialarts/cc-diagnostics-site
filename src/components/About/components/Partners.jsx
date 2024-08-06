import Airtable from "../../common/Airtable/Airtable";
import ContactHeavy from "../../common/ContactButtons/ContactHeavy";
import ContactLight from "../../common/ContactButtons/ContactLight";

const partnerLogo = (partner) => {

  return (
<img
key={partner.id}
src={partner.fields.Logo && partner.fields.Logo.length > 0 ? partner.fields.Logo[0].url : placeholder} 
alt={partner.fields.Partner}
width={105}
height={48}
className="max-h-12 w-full object-contain object-left"
/>
  );
};


export default function Partners() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Meet our Partners</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                scelerisque amet ullamcorper eu enim et fermentum, augue.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <ContactHeavy/>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Airtable tableName="Partners" view="Grid view" renderItem={partnerLogo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
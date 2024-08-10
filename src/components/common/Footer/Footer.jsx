import React from "react";
import logo from "../../../assets/images/logo.png";
import Airtable from "../../common/Airtable/Airtable";
import { PhoneIcon } from "@heroicons/react/24/outline";
import SearchBar from "../../SearchDocs/SearchBar";

const navigation = {
  siteMap: [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ccdiagnostics/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "Instagram",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "X",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.0167L12.871 11.0131L18.3224 18.9303H15.9356L11.5541 13.0956Z" />
    //     </svg>
    //   ),
    // },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/cc-diagnostics",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
 <path
      fillRule="evenodd"
      d="M20.3292112,2 C21.2519624,2 22,2.74752185 22,3.67078882 L22,20.3292112 C22,21.2519624 21.2524781,22 20.3292112,22 L3.67078882,22 C2.74803764,22 2,21.2524781 2,20.3292112 L2,3.67078882 C2,2.74803764 2.74752185,2 3.67078882,2 L20.3292112,2 Z M15.51875,9.5 C14.0993287,9.5 13.128125,10.127356 12.6956992,10.8562567 L12.625,10.9858333 L12.625,9.625 L9.91666667,9.625 L9.91666667,19.2083333 L12.8333333,19.2083333 L12.8333333,14.56625 C12.8333333,13.0104167 13.40625,12.0208333 14.7833333,12.0208333 C15.7330797,12.0208333 16.1315784,12.8606664 16.1644352,14.3580086 L16.1666667,14.56625 L16.1666667,19.2083333 L19.0833333,19.2083333 L19.0833333,13.9154167 C19.0833333,11.0575 18.3995833,9.5 15.51875,9.5 Z M7.83333333,9.5 L4.91666667,9.5 L4.91666667,19.0833333 L7.83333333,19.0833333 L7.83333333,9.5 Z M6.375,4.5 C5.33958333,4.5 4.5,5.33958333 4.5,6.375 C4.5,7.41041667 5.33958333,8.25 6.375,8.25 C7.41041667,8.25 8.25,7.41041667 8.25,6.375 C8.25,5.33958333 7.41041667,4.5 6.375,4.5 Z"
      clipRule="evenodd"
    />
        </svg>
      ),
    },
  ],
};

const Partners = (partner) => {

  return (
    <ul role="list" className="mt-6 space-y-4">
      <li key={partner.id}>
        <a
          href={partner.fields.Site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
        >
        <h6>{partner.fields.Partner}</h6>
          {/* <img src={partner.fields.Logo && partner.fields.Logo.length > 0 ? partner.fields.Logo[0].url : placeholder} alt={partner.fields.Partner} className="h-6" /> */}
        </a>
      </li>
    </ul>
  );
};

const contact = (contact) => {
  return (
    <ul role="list" className="mt-6 space-y-4">
      <li key={contact.id}>
        <p
          // href={contact.href}
          className="text-sm leading-6 text-gray-600"
        >
       {contact.fields.info}
        </p>
      </li>
    </ul>
  )
}

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-ccAliceBlue">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img alt="CC Diagnostics Logo" src={logo} className="h-7" />
            <p className="text-sm text-left leading-6 text-gray-600">
              Revolutionising cancer diagnostics
            </p>
            <div className="flex space-x-6 align-center justify-center">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ccDarkBlue hover:text-ccLightBlue align-center justify-center"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="text-sm text-left leading-6 text-gray-600">
              Already purchased? find your documentation here
            <SearchBar/>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">
                  Site Map
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.siteMap.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Contact section */}

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">
                  Contact
                </h3>
                <Airtable tableName="Contact" view="Grid view" renderItem={contact} />
              </div>
              {/* Partner section */}
            </div>
            <div className="pl-8">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">
                Partners
              </h3>
              <div className="md:grid md:grid-cols-2">
                <Airtable tableName="Partners" view="Grid view" renderItem={Partners} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-ccLightBlue/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-grey-400">
            &copy; 2024 CC Diagnostics
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useRef, useState } from "react";
import teamPhoto from "../../assets/images/teamPhoto.jpg";
import emailjs from "@emailjs/browser";
import SEO from "../common/SEO";
import ReCAPTCHA from "react-google-recaptcha";
import PrivacyPolicy from "../../assets/pdf/PrivacyPolicy.pdf";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // const errorMessage = () => {
  //   return (
  //     <p className="mt-2 text-lg leading-8 text-gray-600">
  //       Please complete Captcha
  //     </p>
  //   );
  // };

  const [isEmpty, setEmpty] = useState(false);

  const handleClick = () => {
    if (!captchaValue) {
      setEmpty(true);
      // <p className="block px-3.5 py-2 text-sm font-medium leading-6 text-gray-900">
      //   Please complete Captcha
      // </p>
    } else {
      setEmpty(false);
      // <p className="block px-3.5 py-2 text-sm font-medium leading-6 text-gray-900">
      //   All done!
      // </p>
    }
  };

  const sendEmail = (e) => {
    const serviceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAIL_JS_USER_ID;
    e.preventDefault();

    if (!captchaValue) {
      console.log("Please complete captcha");
    }

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current,
        userID,
        {
          "g-recaptcha-response": captchaValue,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* SEO Component */}
      <SEO
        title="Contact Us - CC Diagnostics"
        description="Get in touch with CC Diagnostics for any inquiries, support, or information. Fill out our contact form to reach our team and we will get back to you promptly."
        keywords="contact, CC Diagnostics, customer support, inquiries, contact form"
        url="https://www.cc-diagnostics.netlify.app/contact"
        image="https://www.cc-diagnostics.netlify.app/assets/logo-COHLTM4X.png" // Using company logo for meta image
      />

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            alt="team photo"
            src={teamPhoto}
            className="h-64 w-full bg-gray-50 object-contain sm:h-80 lg:absolute lg:h-full"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue py-6">
                Get in Touch
              </h2>
              {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Have a question or need assistance? Fill out the form below.
            </p> */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="from_name"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="from_lastname"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="from_email"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-ccDarkBlue"
                    >
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="from_company"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-ccDarkBlue"
                      >
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="from_phone"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:col-span-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-ccDarkBlue"
                    >
                      How can we help you?
                    </label>

                    <select
                      name="from_question"
                      defaultValue="general"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-ccDarkBlue ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                    >
                      <option>General Enquiry</option>
                      <option>Purchase</option>
                      <option>Documentation</option>
                      <option>Product Support</option>
                      <option>Purchasing Support</option>
                      <option>Complaint</option>
                      <option>Other inquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccLightBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey={"6Ldkdy8qAAAAAA9_u4lncb7mBImiduZxr5s7jsdB"}
                  onChange={handleCaptchaChange}
                  className="my-6"
                />
                {isEmpty && (
                  <p className="block px-3.5 py-2 text-sm font-medium leading-6 text-red-600">
                    *Please complete Captcha
                  </p>
                )}
                <div class="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    required
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                  />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-red-600 underline"
                    >
                      I agree to the Privacy Policy
                    </label>
                  <a
                    href={PrivacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ms-2 text-red-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                    onClick={handleClick}
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

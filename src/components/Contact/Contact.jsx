import teamPhoto from '../../assets/images/teamPhoto.jpg'
export default function Contact() {
    return (
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
              <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue">Get in Touch</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Have a question or need assistance? Fill out the form below.
              </p>
              <form action="#" method="POST" className="mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-ccDarkBlue">
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:col-span-2">
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-ccDarkBlue">
        How can we help you?
      </label>
      <select
        id="question"
        name="question"
        defaultValue="general"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
      >
        <option>General Enquiry</option>
        <option>Purchase</option>
        <option>Documentation</option>
      </select>
    </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      {/* <label htmlFor="message" className="block text-sm font-semibold leading-6 text-ccDarkBlue">
                        How can we help you?
                      </label> */}
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-ccDarkBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                        defaultValue={''} placeholder='write your message here'
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                      className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
import React, { useState } from "react";
// import { useFormspark } from "@formspark/use-formspark";
// import teamPhoto from "../../assets/images/teamPhoto.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/PwDumrV24', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('There was an error submitting the form.');
      }
    } catch (error) {
      setStatus('There was an error submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;







// const FORMSPARK_FORM_ID = "PwDumrV24";

// const ContactForm = () => {
//   const [submit, submitting] = useFormspark({
//     formId: "PwDumrV24",
//   });
//   const [message, setMessage] = useState("");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   return (

//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         await submit({ message, email, name });
//         alert("Form submitted successfully");
//       }}
//     >
//       <label
//         htmlFor="name"
//         className="block text-sm font-semibold leading-6 text-gray-900"
//       >
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>

//       <label
//         htmlFor="name"
//         className="block text-sm font-semibold leading-6 text-gray-900"
//       >
//         Email
//         <input
//           type="text"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>

//       <label
//         htmlFor="name"
//         className="block text-sm font-semibold leading-6 text-gray-900"
//       >
//         What would you like to talk about?
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </label>
//       <button type="submit" disabled={submitting}>
//         Send
//       </button>
//     </form>
//   );
// };

// export default function Contact() {
//   return (
//     <div className="relative bg-white">
//       <div className="lg:absolute lg:inset-0 lg:left-1/2">
//           <img
//             alt="team photo"
//             src={teamPhoto}
//             className="h-64 w-full bg-gray-50 object-contain sm:h-80 lg:absolute lg:h-full"
//           />
//         </div>
//       <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
//         <div className="px-6 lg:px-8">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">
//               Get in Touch
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600">
//               Have a question or need assistance? Fill out the form below.
//             </p>
//             {ContactForm()}
//           </div>
//         </div>
//       </div>

      {/* Original Below */}

      {/* <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            alt="team photo"
            src={teamPhoto}
            className="h-64 w-full bg-gray-50 object-contain sm:h-80 lg:absolute lg:h-full"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
              Have a question or need assistance? Fill out the form below.
              </p>
              <form action="#" method="POST" className="mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900">
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
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:col-span-2">
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        How can we help you?
      </label>
      <select
        id="question"
        name="question"
        defaultValue="general"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>General Enquiry</option>
        <option>Purchase</option>
        <option>Documentation</option>
      </select>
    </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6"> */}
      {/* Below was commented out with Original */}
      {/* <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        How can we help you?
                      </label> */}
      {/* Above was commented out with Original */}
      {/* <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ccDarkBlue sm:text-sm sm:leading-6"
                        defaultValue={''} placeholder='write your message here'
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
//     </div>
//   );
// }

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

// const posts = [
//   {
//     id: 1,
//     title: 'News Article 1',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     highlights: [
//       'Data types.',
//       'Loops.',
//       'Events.',
//     ],
//     additionalInfo: 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
//     finalThoughts: 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
//     quote: {
//       text: '“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”',
//       imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       author: 'Maria Hill',
//       role: 'Marketing Manager'
//     }
//   },
//   // Add more posts as needed
// ];

// export default function IndividualArticles() {
//   const { id } = useParams();
//   const navigate = useNavigate(); // Hook to navigate
//   const post = posts.find(p => p.id === parseInt(id));

//   if (!post) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div className="relative bg-white px-6 py-32 lg:px-8">
//       {/* Button to navigate back to the news page */}
//       <button
//         type="button"
//         onClick={() => navigate('/news')}
//         className="fixed bottom-4 right-4 rounded-full bg-ccDarkBlue p-2 text-white shadow-sm hover:bg-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
//       >
//         <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
//       </button>
//       <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
//         {/* <p className="text-base font-semibold leading-7 text-ccDarkBlue">Introducing</p> */}
//         <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
//         <figure className="mt-16">
//           <img
//             alt=""
//             src={post.imageUrl}
//             className="aspect-video rounded-xl bg-gray-50 object-cover"
//           />
//           <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
//             <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
//             Faucibus commodo massa rhoncus, volutpat.
//           </figcaption>
//         </figure>
//         <p className="mt-6 text-xl leading-8">{post.description}</p>
//         <div className="mt-10 max-w-2xl">
//           {/* Add content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import airtableBase from '../../../utils/airtableapi';
import placeholder from '../../../assets/images/placeholder.png'; 
import dayjs from "dayjs";
import ReactMarkdown from 'react-markdown';

export default function IndividualArticle() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); 

  const initialPost = location.state?.post; 
  const [post, setPost] = useState(initialPost);
  const [isLoading, setIsLoading] = useState(!initialPost); 
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialPost) {
      console.log("Fetching data from Airtable (fallback mechanism)");
      airtableBase('News')
        .find(id)
        .then((record) => {
          setPost(record._rawJson);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
          console.error(error);
        });
    } else {
      console.log("Using post data from props"); 
      }
  }, [id, initialPost]);

  const renderArticle = (post) => {
    const formattedDate = dayjs(post.fields.Published).format("D MMM, YYYY");

    return (
      <div className="relative bg-white px-6 py-32 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('/news')}
          className="fixed bottom-4 right-4 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   
 focus-visible:outline-indigo-600"   

        >
          <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.fields.Title}</h1>   

          <p className="mt-6 text-xl leading-8">{post.fields.Description}</p>
          <div className="mt-10 max-w-2xl prose">
          <ReactMarkdown>{post.fields['Full Content']}</ReactMarkdown>
          </div>
          <figure className="mt-16">
            <img
              alt=""
              src={post.fields.Photo && post.fields.Photo.length > 0 ? post.fields.Photo[0].url : placeholder }
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
              Published on {formattedDate}
            </figcaption>
          </figure>
        </div>
      </div>
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <div>Article not found</div>;

  return renderArticle(post);
}

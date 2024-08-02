import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowUturnLeftIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

const posts = [
  {
    id: 1,
    title: 'News Article 1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    highlights: [
      'Data types.',
      'Loops.',
      'Events.',
    ],
    additionalInfo: 'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.',
    finalThoughts: 'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
    quote: {
      text: '“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique.”',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      author: 'Maria Hill',
      role: 'Marketing Manager'
    }
  },
  // Add more posts as needed
];

export default function IndividualArticles() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <div className="relative bg-white px-6 py-32 lg:px-8">
      {/* Button to navigate back to the news page */}
      <button
        type="button"
        onClick={() => navigate('/news')}
        className="fixed bottom-4 right-4 rounded-full bg-ccDarkBlue p-2 text-white shadow-sm hover:bg-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
      >
        <ArrowUturnLeftIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        {/* <p className="text-base font-semibold leading-7 text-ccDarkBlue">Introducing</p> */}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <figure className="mt-16">
          <img
            alt=""
            src={post.imageUrl}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        <p className="mt-6 text-xl leading-8">{post.description}</p>
        <div className="mt-10 max-w-2xl">
          {/* Add content here if needed */}
        </div>
      </div>
    </div>
  );
}

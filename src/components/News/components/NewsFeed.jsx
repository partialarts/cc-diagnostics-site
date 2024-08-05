import React, { useState } from "react";
import Airtable from "../../common/Airtable/Airtable";
import dayjs from "dayjs";
import placeholder from "../../../assets/images/placeholder.png";

export default function NewsFeed() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const renderNewsItem = (post) => {
    const formattedDate = dayjs(post.createdTime).format("D MMM, YYYY");

    return (
      <article // Apply flex classes directly to the article
        key={post.id}
        className="relative isolate flex flex-col gap-8 lg:flex-row lg:w-full" 
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <img
            alt=""
            src={
              post.fields.Photo && post.fields.Photo.length > 0
                ? post.fields.Photo[0].url
                : placeholder
            }
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          />
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        
          <div className="group relative max-w-xl">
            <h3 className="mt-0 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600   
 text-left">
              <a href={post.fields.href}>
                <span className="absolute inset-0 pointer-events-none" />
                {post.fields.Title}
              </a>
            </h3>
            <div className="mt-3 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.createdTime} className="text-gray-500">
                      {formattedDate}
                    </time>
                    </div>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 text-left">
              {post.fields.Description}
            </p>
          </div>
          {/* ... (rest of the article content) ... */}
        
      </article>
    );
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Year filter section */}
        <div className="years lg:col-span-1 lg:sticky lg:top-0 text-left text-xl font-bold tracking-tight text-gray-900">
          {["2024", "2023", "2022", "2021"].map((year) => (
            <h2
              key={year}
              className={`lg:p-4 p-8 cursor-pointer ${
                selectedYear === year ? "text-ccLightBlue" : ""
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </h2>
          ))}
        </div>

        {/* News articles section */}
        <div className="col-span-2">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-20 lg:space-y-20">
              <Airtable
                tableName="News"
                view="Grid view"
                renderItem={(post) => {
                  // Filter by year within renderItem
                  if (!post.createdTime.startsWith(selectedYear)) {
                    return null; // Don't render if year doesn't match
                  }
                  return renderNewsItem(post); // Render if year matches
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Articles from './components/Articles';
import Hero from './components/Hero';
import FeaturedNews from './components/FeaturedNews';
import TimelineNews from './components/TimelineNews';

function News() {
  return (
    <>
    <FeaturedNews/>
    {/* <Hero/> */}
    <TimelineNews/>
      {/* <Articles/> */}

    </>
  );
}

export default News;

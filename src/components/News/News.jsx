import React from 'react';
import Articles from './components/Articles';
import Hero from './components/Hero';
import FeaturedNews from './components/FeaturedNews';

function News() {
  return (
    <>
    <FeaturedNews/>
    <Hero/>
      <Articles/>
    </>
  );
}

export default News;

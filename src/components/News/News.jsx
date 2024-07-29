import React from 'react';
import Articles from './components/Articles';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import TimelineNews from './components/TimelineNews';
import HomeNews from '../Home/components/HomeNews';
import ArticleCards from './components/ArticleCards';
import NewsCards from './components/NewsCard';
import NewsYears from './components/NewsYears';

function News() {
  return (
    <>
      {/* <FeaturedNews/> */}
      {/* <Hero/> */}
      {/* <TimelineNews/> */}
      {/* <Articles/> */}
      <LatestNews />
      {/* <ArticleCards/> */}
      <NewsYears />
    </>
  );
}

export default News;

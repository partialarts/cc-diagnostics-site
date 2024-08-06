import React, { useEffect, useState } from 'react';
// import Articles from './components/Articles';
// import Hero from './components/Hero';
import FeaturedNews from './components/FeaturedNews';
// import TimelineNews from './components/TimelineNews';
// import HomeNews from '../Home/components/HomeNews';
// import ArticleCards from './components/ArticleCards';
// import NewsCards from './components/NewsCard';
import NewsFeed from './components/NewsFeed';
import FNSkeleton from './components/FNSkeleton';
import NFSkeleton from './components/NFSkeleton';

function News() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* <Hero/> */}
      {/* <TimelineNews/> */}
      {/* <Articles/> */}
      {/* <ArticleCards/> */}
{loading ? <FNSkeleton/> : <FeaturedNews />}
{loading ? <NFSkeleton/> : <NewsFeed />}

      {/* <FeaturedNews/> */}
      {/* <NewsFeed /> */}
    </>
  );
}

export default News;

// import React from 'react';
// import Hero from './components/Hero'

// function Home() {

//     return (
//         <Hero />
//     )

// }

// export default Home;

import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import MethicaKit from './components/MethicaKit';
import HomeNews from './components/HomeNews';
import FeaturedNews from '../News/components/FeaturedNews';

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Mission />
            <MethicaKit />
            {/* <HomeNews /> */}
            <FeaturedNews/>
        </>
    );
}

export default Home;

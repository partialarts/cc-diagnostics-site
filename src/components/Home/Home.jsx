// import React from 'react';
// import Hero from './components/Hero'

// function Home() {

//     return (
//         <Hero />
//     )

// }

// export default Home;

import React from 'react';
import Hero from './components/Hero'
import Stats from './components/Stats';
import MethicaKit from './components/MethicaKit'
import Mission from './components/Mission'
import HomeNews from './components/HomeNews';

function Home() {

    return (
        <>
        <Hero />
        <Stats />
        <Mission />
        {/* <MethicaKit /> */}
        <HomeNews />
        </>
    )

}

export default Home;
import React from 'react';
import Hero from './homeComponents/Hero'
import Stats from './homeComponents/Stats';
import MethicaKit from './homeComponents/MethicaKit'
import Mission from './homeComponents/Mission'
import HomeNews from './homeComponents/HomeNews';

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
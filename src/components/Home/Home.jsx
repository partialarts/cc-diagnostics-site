import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import MethicaKit from './components/MethicaKit';
import HomeNews from './components/HomeNews';

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Mission />
            <MethicaKit />
            <HomeNews />
        </>
    );
}

export default Home;

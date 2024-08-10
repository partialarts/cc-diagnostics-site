import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Info from '../Products/components/Info';
import Tabs from '../Products/components/Tabs';
import Flow from '../Products/components/Flow';
import FullTabs from '../Products/components/FullTabs';
import SearchCTA from '../SearchDocs/SearchCTA';
import Accordion from './components/Accordian';
import Pipeline from './components/Pipeline';

function Products() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', '')); // Remove the '#' character
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <Info />
            {/* <FullTabs /> */}
            {/* <Accordion/> */}
            <Tabs />
            <Flow />
            <Pipeline />
            <SearchCTA />
        </>
    );
}

export default Products;

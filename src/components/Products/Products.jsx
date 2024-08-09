import React from 'react';
import Info from '../Products/components/Info';
import Tabs from '../Products/components/Tabs';
import Flow from '../Products/components/Flow';
import FullTabs from '../Products/components/FullTabs';
import SearchCTA from '../SearchDocs/SearchCTA';
import Accordion from './components/Accordian';

function Products() {
    return (
        <>
            <SearchCTA/>
            <Info />
            {/* <FullTabs /> */}
            {/* <Accordion/> */}
            <Tabs />
            <Flow />
        </>
    );
}

export default Products;


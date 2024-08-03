import React from 'react';
import Info from '../Products/components/Info';
import Tabs from '../Products/components/Tabs';
import Flow from '../Products/components/Flow';
import FullTabs from '../Products/components/FullTabs';
import SearchCTA from '../SearchDocs/SearchCTA';

function Products() {
    return (
        <>
            <SearchCTA/>
            <Info />
            {/* <FullTabs /> */}
            <Tabs />
            <Flow />
        </>
    );
}

export default Products;


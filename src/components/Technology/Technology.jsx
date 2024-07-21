import React from 'react';
import Info from '../Technology/components/Info';
import Tabs from '../Technology/components/Tabs';
import Flow from '../Technology/components/Flow';
import FullTabs from '../Technology/components/FullTabs';

function Technology() {
    return (
        <>
            <Info />
            {/* <FullTabs /> */}
            <Tabs />
            <Flow />
        </>
    );
}

export default Technology;


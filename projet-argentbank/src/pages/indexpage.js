import React, { Fragment } from 'react';
import Features from '../components/indexcomponents/features';
import Hero from '../components/indexcomponents/hero';
import Featuresstyle from '../styles/indexstyles/featuresstyles';
import Herostyle from '../styles/indexstyles/herostyle';


export default function Index() {

    return (
        <Fragment>
            <main>
                <Hero /><Herostyle />
                <Features /><Featuresstyle />
            </main>
        </Fragment>
    )
}
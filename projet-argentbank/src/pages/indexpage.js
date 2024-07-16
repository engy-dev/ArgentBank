import React, { Fragment } from 'react';
import Features from '../components/indexcomponents/features';
import Hero from '../components/indexcomponents/hero';
import Featuresstyle from '../styles/indexstyles/featuresstyles';
import Herostyle from '../styles/indexstyles/herostyle';


export default class Index extends React.Component{
    render(){
        return(
            <Fragment>
                <main>
                    <Hero/><Herostyle/>
                    <Features/><Featuresstyle/>
                </main>
            </Fragment>
        )
    }
}
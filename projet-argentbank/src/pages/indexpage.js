import React, { Fragment } from 'react';
import Features from '../components/indexcomponents/features';
import Hero from '../components/indexcomponents/hero';
import Featuresstyle from '../styles/indexstyles/featuresstyles';
import Herostyle from '../styles/indexstyles/herostyle';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';


export default class Index extends React.Component{
    render(){
        return(
            <Fragment>
                            <Header/><Headerstyle/>
                <main>
                    <Hero/><Herostyle/>
                    <Features/><Featuresstyle/>
                </main>
            </Fragment>
        )
    }
}
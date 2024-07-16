import React, { Fragment } from 'react';
import Signin from '../components/signincomponents/signincontent';
import Signincontentstyle from '../styles/signinstyles/signincontentstyle';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';

export default class Signinpage extends React.Component{
    render(){
        return(
            <Fragment>
                            <Header/><Headerstyle/>
                <Signin/><Signincontentstyle/>
            </Fragment>
        )
    }
}
import React, { Fragment } from 'react';
import Signin from '../components/signincomponents/signincontent';
import Signincontentstyle from '../styles/signinstyles/signincontentstyle';

export default class Signinpage extends React.Component{
    render(){
        return(
            <Fragment>
                <Signin/><Signincontentstyle/>
            </Fragment>
        )
    }
}
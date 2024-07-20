import React, { Fragment } from 'react';
import Signin from '../components/signincomponents/signincontent';
import Signincontentstyle from '../styles/signinstyles/signincontentstyle';


/*Login page which contains sigin component*/
export default function Signinpage() {

    return (
        <Fragment>
            <Signin /><Signincontentstyle />
        </Fragment>
    )
}
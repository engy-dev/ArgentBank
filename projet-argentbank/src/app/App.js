import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Index from '../pages/indexpage';
import Footer from '../components/footer';
import Footerstyle from '../styles/footerstyle';
import Signinpage from '../pages/signinpage';
import Userpage from '../pages/userpage';
import Error404 from '../components/error';

/**
 * Create routes for differents components of the site
 * 
 * @class
 * @this {App}
 * @param {id} id of the user
 */

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Index/>}/>
                    <Route path="/signin" element={<Signinpage/>}/>
                    <Route path="/user" element={<Userpage/>}/>
                    <Route path="/*" element={<Error404/>}/>
                </Routes>
                <Footer/><Footerstyle/>
            </BrowserRouter>
        )
    }
}


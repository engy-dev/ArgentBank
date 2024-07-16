import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Index from '../pages/indexpage';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';

/**
 * Create routes for differents components of the site
 * 
 * @class
 * @this {App}
 * @param {id} id of the user
 * @param {props} props render the page with the user's data
 */

export default class App extends React.Component{
    render(){

        return(
            <BrowserRouter>
                <Header/><Headerstyle/>
            <Routes>
                <Route exact path="/" component={Index}/>
            </Routes>
            </BrowserRouter>
        )
    }
}
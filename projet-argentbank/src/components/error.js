import React from 'react';
import { Link } from 'react-router-dom';
import Errorstyle from '../styles/page404style.js';


/*404 error component*/
export default function Error404() {
    return (
        <main className="error">
            <div className="error-content">
                <p className="error-number">
                    404
                </p>
                <p className="error-message">
                    La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link className="nav-link error-back" to="/">
                Retourner à la page d'accueil
            </Link>
            <Errorstyle />
        </main>
    );
}
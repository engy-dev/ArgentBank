import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import Appstyle from './styles/Appstyle.js';
import { Provider } from 'react-redux';
import store from './services/redux/store';
import { BrowserRouter } from 'react-router-dom';

/*React render of the Website*/
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter >
                <App />
                <Appstyle />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

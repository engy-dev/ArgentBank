import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import Appstyle from './styles/Appstyle.js';
import { Provider } from 'react-redux';
import store from './services/redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <Appstyle />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

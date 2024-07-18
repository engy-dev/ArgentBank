import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import Appstyle from './styles/Appstyle.js';

ReactDOM.render(
  <React.StrictMode>
    <App /><Appstyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

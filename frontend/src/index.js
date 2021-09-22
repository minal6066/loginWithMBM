import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import {BrowserRouter} from 'react-router-dom';
require('dotenv').config({path:  '../.env'});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.interceptors.request.use(request => {
    // Edit Request Config
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    // Edit Response Config
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers/store';
import { App } from './App';


// setup fake backend
import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
       <App /> 
    </Provider>,
    document.getElementById('root')
);
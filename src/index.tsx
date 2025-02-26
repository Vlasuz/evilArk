import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <App/>
        </BrowserRouter>
    </Provider>
);

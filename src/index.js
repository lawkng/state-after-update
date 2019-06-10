import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './shared/configureStore';

import './index.css';
import App from './App';

/*
I don't know how to do redux for tradeAction if the JSON data is like this:

    {
        tradeAction: 'sell',
        BTC: { },
        LTC: { }
    }
*/
const initData = {
    tradeAction: {
        order: 'sell'
    },
    BTC: { },
    LTC: { },
    BNB: { }
};

const store = configureStore(initData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
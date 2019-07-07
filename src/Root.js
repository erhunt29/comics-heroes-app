import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import store from './store';
import { GlobalStyle } from './styled';
import App from './App';

const Root = () => (
    <Provider store={store}>
        <GlobalStyle />
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import store from './store';
import Theme from './styled';
import App from './App';

const Root = () => (
    <Theme>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </Theme>
);

export default Root;

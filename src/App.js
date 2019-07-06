import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChooseTeam from './components/choose-team';

const App = () => (
    <Provider store={store}>
        <ChooseTeam />
    </Provider>
);

export default App;

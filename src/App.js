import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChooseTeam from './components/choose-team';
import CharacterList from './components/character-list';
import { characters } from './data';

const App = () => (
    <Provider store={store}>
        <ChooseTeam />
        <CharacterList />
    </Provider>
);

export default App;

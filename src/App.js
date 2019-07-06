import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { GlobalStyle, Container } from './styled';
import ChooseTeam from './components/choose-team';
import CharacterList from './components/character-list';
import { characters } from './data';

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <ChooseTeam />
        <CharacterList />
    </Provider>
);

export default App;

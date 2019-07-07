import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';
import Navigation from '../navigation';
import { Root, Character, Characters } from './styled';
import { searchInArray, sortArrayByField } from '../../helpers';

class CharacterList extends Component {
    componentDidMount() {
        const {
            loadCharacters,
            location: { pathname },
        } = this.props;
        loadCharacters(pathname.slice(1));
    }

    componentDidUpdate(prevProps) {
        const {
            loadCharacters,
            location: { pathname },
        } = this.props;
        if (prevProps.location.pathname !== pathname)
            loadCharacters(pathname.slice(1));
    }

    get characters() {
        const { characters, search, sort } = this.props;

        let newCharacters = characters;

        if (search) newCharacters = searchInArray(characters, search);

        if (sort) newCharacters = sortArrayByField(newCharacters, sort, 'name');

        return newCharacters;
    }

    render() {
        const { isCharactersLoading, view } = this.props;

        return (
            <Root>
                <Navigation />
                <Characters view={view}>
                    {isCharactersLoading && 'Characters is Loading'}
                    {this.characters.map(character => (
                        <Character view={view} key={character.id}>
                            {character.name}
                        </Character>
                    ))}
                </Characters>
            </Root>
        );
    }
}

export default connect(
    store => ({
        characters: store.team.characters,
        isCharactersLoading: store.team.isCharactersLoading,
        view: store.navigation.view,
        search: store.navigation.search,
        sort: store.navigation.sort,
    }),
    { loadCharacters }
)(CharacterList);

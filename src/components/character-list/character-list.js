import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';
import Navigation from '../navigation';
import { Root, Container, Character, Characters } from './styled';
import { searchInArray, sortArrayByField } from '../../helpers';

class CharacterList extends Component {
    componentDidUpdate() {
        const { teamName, characters, loadCharacters } = this.props;
        if (teamName && !characters.length) loadCharacters(teamName);
    }

    get characters() {
        const { characters, search, sort } = this.props;

        let newCharacters = characters;

        if (search) newCharacters = searchInArray(characters, search);

        if (sort) newCharacters = sortArrayByField(newCharacters, sort, 'name');

        return newCharacters;
    }

    render() {
        const { teamName, isCharactersLoading, view } = this.props;

        return (
            <Root>
                <Container teamName={teamName}>
                    <Navigation />
                    <Characters view={view}>
                        {isCharactersLoading && 'Characters is Loading'}
                        {this.characters.map(character => (
                            <Character view={view} key={character.id}>
                                {character.name}
                            </Character>
                        ))}
                    </Characters>
                </Container>
            </Root>
        );
    }
}

export default connect(
    store => ({
        characters: store.team.characters,
        teamName: store.team.teamName,
        isCharactersLoading: store.team.isCharactersLoading,
        view: store.navigation.view,
        search: store.navigation.search,
        sort: store.navigation.sort,
    }),
    { loadCharacters }
)(CharacterList);

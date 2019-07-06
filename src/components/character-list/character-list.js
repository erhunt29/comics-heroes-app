import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';
import Navigation from '../navigation';
import { Root, Container, Character, Characters } from './styled';

class CharacterList extends Component {
    componentDidUpdate() {
        const { teamName, characters, loadCharacters } = this.props;
        if (teamName && !characters.length) loadCharacters(teamName);
    }

    render() {
        const { teamName, characters, isCharactersLoading, view } = this.props;
        return (
            <Root>
                <Container teamName={teamName}>
                    <Navigation />
                    <Characters view={view}>
                        {isCharactersLoading && 'Characters is Loading'}
                        {!!characters.length &&
                            characters.map(character => (
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
        view: store.navigation.view,
        characters: store.team.characters,
        teamName: store.team.teamName,
        isCharactersLoading: store.team.isCharactersLoading,
    }),
    { loadCharacters }
)(CharacterList);

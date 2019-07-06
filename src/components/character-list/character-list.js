import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';
import {
    Root,
    Container,
    Heading,
    Wrapper,
    Button,
    Character,
    Characters,
} from './styled';

class CharacterList extends Component {
    componentDidUpdate() {
        const { teamName, characters, loadCharacters } = this.props;
        if (teamName && !characters.length) loadCharacters(teamName);
    }

    render() {
        const { teamName, characters, isCharactersLoading } = this.props;
        return (
            <Root>
                <Container teamName={teamName}>
                    <Characters>
                        {isCharactersLoading && 'Characters is Loading'}
                        {!!characters.length &&
                            characters.map(character => (
                                <Character key={character.id}>
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
    }),
    { loadCharacters }
)(CharacterList);

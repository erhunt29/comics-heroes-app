import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';

class CharacterList extends Component {
    componentDidUpdate() {
        const { teamName, characters, loadCharacters } = this.props;
        if (teamName && !characters.length) loadCharacters(teamName);
    }

    render() {
        const { characters, isCharactersLoading } = this.props;
        return (
            <div>
                {isCharactersLoading && 'Characters is Loading'}
                {!!characters.length &&
                    characters.map(character => (
                        <li key={character.id}>{character.name}</li>
                    ))}
            </div>
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

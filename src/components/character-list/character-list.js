import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCharacters } from '../../action-creators';
import {
    Root,
    Container,
    Navigation,
    SeachForm,
    SeachInput,
    Filters,
    View,
    Table,
    Gallery,
    Heading,
    Wrapper,
    Button,
    Character,
    Characters,
} from './styled';

class CharacterList extends Component {
    state = {
        view: 'gallery',
    };

    componentDidUpdate() {
        const { teamName, characters, loadCharacters } = this.props;
        if (teamName && !characters.length) loadCharacters(teamName);
    }

    handleChangeView = nextView => () => {
        const { view } = this.state;

        if (view !== nextView) this.setState({ view: nextView });
    };

    render() {
        const { teamName, characters, isCharactersLoading } = this.props;
        const { view } = this.state;
        return (
            <Root>
                <Container teamName={teamName}>
                    <Navigation>
                        <SeachForm>
                            <SeachInput placeholder={'...search'} />
                        </SeachForm>
                        <Filters></Filters>
                        <View>
                            <Gallery
                                active={view === 'gallery'}
                                onClick={this.handleChangeView('gallery')}
                            />
                            <Table
                                active={view === 'table'}
                                onClick={this.handleChangeView('table')}
                            />
                        </View>
                    </Navigation>
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
        characters: store.team.characters,
        teamName: store.team.teamName,
        isCharactersLoading: store.team.isCharactersLoading,
    }),
    { loadCharacters }
)(CharacterList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { loadCharacters } from '../../action-creators';
import Navigation from '../navigation';
import { Root, Preloader, Error, Character, Characters } from './styled';
import { searchInArray, sortArrayByField } from '../../helpers';
import preloader from './images/preloader.svg';

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
            lang,
        } = this.props;
        if (prevProps.location.pathname !== pathname || prevProps.lang !== lang)
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
        const { isCharactersLoading, view, hasError, lang } = this.props;

        return (
            <Root isCharactersLoading={isCharactersLoading}>
                <Navigation />
                {isCharactersLoading && <Preloader src={preloader} />}
                {hasError && (
                    <Error>
                        {lang !== 'RU'
                            ? 'Error: please check your connection'
                            : 'Ошибка загрузки данных : проверьте соединение'}
                    </Error>
                )}
                {!isCharactersLoading && (
                    <Characters view={view}>
                        <ReactCSSTransitionGroup
                            transitionName="character"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}
                        >
                            {this.characters.map(character => (
                                <Character
                                    view={view}
                                    key={character.id}
                                    src={character.img}
                                >
                                    <span>{character.name}</span>
                                </Character>
                            ))}
                        </ReactCSSTransitionGroup>
                    </Characters>
                )}
            </Root>
        );
    }
}

export default connect(
    store => ({
        characters: store.team.characters,
        isCharactersLoading: store.team.isCharactersLoading,
        hasError: store.team.hasError,
        view: store.navigation.view,
        search: store.navigation.search,
        sort: store.navigation.sort,
        lang:
            store.lang.selectLang ||
            store.lang.geolocationLang ||
            store.lang.defaultLang,
    }),
    { loadCharacters }
)(CharacterList);

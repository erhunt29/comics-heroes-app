import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container, Banner, Lang } from './styled';
import ChooseTeam from './components/choose-team';
import CharacterList from './components/character-list';
import ComboBox from './components/combo-box';
import NoMatch from './components/no-match';
import { changeLanguage, getGeolocation } from './action-creators';

class App extends Component {
    componentDidMount() {
        const { getGeolocation } = this.props;
        getGeolocation();
    }

    render() {
        const {
            lang: { selectLang, defaultLang, geolocationLang },
            changeLanguage,
            team,
        } = this.props;
        return (
            <Container>
                <Banner team={team} />
                <Lang>
                    <ComboBox
                        data={['RU', 'EN']}
                        defaultValue={
                            selectLang || geolocationLang || defaultLang
                        }
                        width={70}
                        select={changeLanguage}
                    />
                </Lang>
                <Switch>
                    <Route exact path="/" component={ChooseTeam} />
                    <Route exact path="/all" component={CharacterList} />
                    <Route exact path="/marvel" component={CharacterList} />
                    <Route exact path="/dc" component={CharacterList} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Container>
        );
    }
}

export default connect(
    store => ({
        lang: store.lang,
        team: store.router.location.pathname.slice(1),
    }),
    { getGeolocation, changeLanguage }
)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    chooseTeam,
    getGeolocation,
    changeLanguage,
} from '../../action-creators';

import { Root, Container, Heading, Wrapper, Button, Link } from './styled';
import ComboBox from '../combo-box';

class ChooseTeam extends Component {
    handleClick = team => () => {
        const { chooseTeam } = this.props;
        chooseTeam(team);
    };

    componentDidMount() {
        const { getGeolocation } = this.props;

        getGeolocation();
    }

    render() {
        const {
            teamName,
            lang: { selectLang, defaultLang, geolocationLang },
            changeLanguage,
        } = this.props;
        return (
            !teamName && (
                <Root>
                    <Container>
                        <ComboBox
                            data={['RU', 'EN']}
                            defaultValue={
                                selectLang || geolocationLang || defaultLang
                            }
                            width={70}
                            select={changeLanguage}
                        />
                        <Heading>Choose team </Heading>
                        <Wrapper>
                            <Button
                                onClick={this.handleClick('DC')}
                                team={'DC'}
                            />
                            <Button
                                onClick={this.handleClick('Marvel')}
                                team={'Marvel'}
                            />
                        </Wrapper>
                        <Link onClick={this.handleClick('All')}>
                            see all characters
                        </Link>
                    </Container>
                </Root>
            )
        );
    }
}

export default connect(
    store => ({
        teamName: store.team.teamName,
        lang: store.lang,
    }),
    { chooseTeam, getGeolocation, changeLanguage }
)(ChooseTeam);

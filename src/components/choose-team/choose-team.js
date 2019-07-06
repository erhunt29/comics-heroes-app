import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseTeam } from '../../action-creators';

import { Root, Container, Heading, Wrapper, Button } from './styled';

class ChooseTeam extends Component {
    handleClick = team => () => {
        const { chooseTeam } = this.props;
        chooseTeam(team);
    };

    render() {
        const { teamName } = this.props;
        return (
            !teamName && (
                <Root>
                    <Container>
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
                    </Container>
                </Root>
            )
        );
    }
}

export default connect(
    store => ({
        teamName: store.team.teamName,
    }),
    { chooseTeam }
)(ChooseTeam);

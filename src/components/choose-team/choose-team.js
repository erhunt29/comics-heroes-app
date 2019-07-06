import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseTeam } from '../../action-creators';

class ChooseTeam extends Component {
    handleClick = team => () => {
        const { chooseTeam } = this.props;
        chooseTeam(team);
    };

    render() {
        const { teamName } = this.props;
        return (
            !teamName && (
                <div>
                    <h1>Choose your team </h1>
                    <button onClick={this.handleClick('DC')}>DC</button>
                    <button onClick={this.handleClick('Marvel')}>Marvel</button>
                </div>
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

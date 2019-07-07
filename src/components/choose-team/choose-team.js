import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Root, Heading, Wrapper, Button, SeeAll } from './styled';

class ChooseTeam extends Component {
    render() {
        return (
            <Root>
                <Heading>Choose team </Heading>
                <Wrapper>
                    <Link to="/dc">
                        <Button team={'DC'} />
                    </Link>
                    <Link to="/marvel">
                        <Button team={'Marvel'} />
                    </Link>
                </Wrapper>
                <Link to="/all">
                    <SeeAll>see all characters</SeeAll>
                </Link>
            </Root>
        );
    }
}

export default connect(store => ({}))(ChooseTeam);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Root, Heading, Wrapper, Button, SeeAll } from './styled';

const ChooseTeam = ({ lang }) => (
    <Root>
        <Heading>
            {' '}
            {lang !== 'RU' ? 'Choose team' : 'Выберете комманду'}{' '}
        </Heading>
        <Wrapper>
            <Link to="/dc">
                <Button team={'DC'} />
            </Link>
            <Link to="/marvel">
                <Button team={'Marvel'} />
            </Link>
        </Wrapper>
        <Link to="/all">
            <SeeAll>
                {lang !== 'RU'
                    ? 'see all characters'
                    : 'смотреть всех персонажей'}
            </SeeAll>
        </Link>
    </Root>
);

export default connect(store => ({
    lang:
        store.lang.selectLang ||
        store.lang.geolocationLang ||
        store.lang.defaultLang,
}))(ChooseTeam);

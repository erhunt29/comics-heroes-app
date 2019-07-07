import React from 'react';
import { connect } from 'react-redux';
import { Root } from './styled';

const NoMatch = ({ lang }) => {
    return (
        <Root>
            {lang === 'RU'
                ? 'Ошибка: страница не найдена'
                : 'Error: Page not found'}
        </Root>
    );
};

export default connect(store => ({
    lang:
        store.lang.selectLang ||
        store.lang.geolocationLang ||
        store.lang.defaultLang,
}))(NoMatch);

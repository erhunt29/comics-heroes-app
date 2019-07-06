import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeView } from '../../action-creators';
import {
    NavigationWrapper,
    SeachForm,
    SeachInput,
    Filters,
    View,
    Gallery,
    Table,
} from './styled';

class Navigation extends Component {
    handleChangeView = nextView => () => {
        const {
            navigation: { view },
            changeView,
        } = this.props;

        if (view !== nextView) changeView(nextView);
    };

    render() {
        const {
            navigation: { view },
        } = this.props;

        return (
            <NavigationWrapper>
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
            </NavigationWrapper>
        );
    }
}

export default connect(
    store => ({
        navigation: store.navigation,
    }),
    { changeView }
)(Navigation);

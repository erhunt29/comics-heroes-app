import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeView, search, sort } from '../../action-creators';
import {
    NavigationWrapper,
    SeachForm,
    SeachInput,
    Filters,
    SortByName,
    View,
    Gallery,
    Table,
} from './styled';

class Navigation extends Component {
    state = {
        value: '',
    };

    handleChangeView = nextView => () => {
        const {
            navigation: { view },
            changeView,
        } = this.props;

        if (view !== nextView) changeView(nextView);
    };

    handleChangeInput = ev => {
        const value = ev.target.value;
        this.setState({
            value,
        });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        const { value } = this.state;
        const { search } = this.props;
        search(value);
    };

    handleSort = () => {
        const { sort } = this.props;
        sort();
    };

    render() {
        const {
            navigation: { view, sort },
        } = this.props;

        const { value } = this.state;

        return (
            <NavigationWrapper>
                <SeachForm onSubmit={this.handleSubmit}>
                    <SeachInput
                        placeholder={'...search'}
                        onChange={this.handleChangeInput}
                        value={value}
                    />
                </SeachForm>
                <Filters>
                    <SortByName
                        sort={sort}
                        active={sort}
                        onClick={this.handleSort}
                    />
                </Filters>
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
    { changeView, search, sort }
)(Navigation);
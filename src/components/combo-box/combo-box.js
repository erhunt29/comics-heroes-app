import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Select, List, ListItem, ToggleList } from './styled';
import arrow from './images/arrow.png';

class ComboBox extends Component {
    state = {
        isListOpen: false,
    };

    handleCloseList = () => {
        this.setState(state => ({ isListOpen: false }));
    };

    handleOpenList = () => {
        this.setState(state => ({ isListOpen: true }));
    };

    handleToggleList = () => {
        const { isListOpen } = this.state;
        isListOpen ? this.handleCloseList() : this.handleOpenList();
    };

    handleSelectRow = item => () => {
        const { select } = this.props;
        select && select(item);
    };

    render() {
        const { data, width, defaultValue, link } = this.props;
        const { isListOpen } = this.state;
        return (
            <Wrapper width={width}>
                <Select
                    onClick={this.handleToggleList}
                    onBlur={() => setTimeout(this.handleCloseList, 150)}
                    width={width}
                >
                    {defaultValue}
                </Select>
                <ToggleList src={arrow} />
                {isListOpen && (
                    <List data={data} width={width}>
                        {data.map(item => (
                            <Link
                                to={link ? `/${item.toLowerCase()}` : '#'}
                                key={item}
                            >
                                <ListItem
                                    active={
                                        defaultValue.toLowerCase() ===
                                        item.toLowerCase()
                                    }
                                    onClick={this.handleSelectRow(item)}
                                >
                                    {item}
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                )}
            </Wrapper>
        );
    }
}

export default ComboBox;

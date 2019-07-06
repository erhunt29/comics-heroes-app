import React, { PureComponent } from 'react';
import { Wrapper, Select, List, ListItem, ToggleList } from './styled';
import arrow from './images/arrow.png';

class ComboBox extends PureComponent {
    state = {
        isListOpen: false,
        selectRow: 0,
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
        select(item);
    };

    render() {
        const { data, width, defaultValue } = this.props;
        const { isListOpen } = this.state;
        return (
            <Wrapper width={width}>
                <Select
                    onClick={this.handleToggleList}
                    onBlur={() => setTimeout(this.handleCloseList, 30)}
                    width={width}
                >
                    {defaultValue}
                </Select>
                <ToggleList src={arrow} />
                {isListOpen && (
                    <List data={data} width={width}>
                        {data.map(item => (
                            <ListItem
                                active={defaultValue === item}
                                key={item}
                                onClick={this.handleSelectRow(item)}
                            >
                                {item}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Wrapper>
        );
    }
}

export default ComboBox;

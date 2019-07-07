import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: ${props => props.width}px;
    background-color: #fff;
    border-radius: 5px;
    height: 30px;
    text-align: left;
`;

export const Select = styled.button`
    width: ${props => props.width}px;
    height: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    background: transparent;
    position: absolute;
    text-align: left;
    z-index: 5;
    :focus {
        outline: none;
    }
`;

export const List = styled.ul`
    position: absolute;
    z-index: 5;
    top: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    height: ${props =>
        props.data.length > 3 ? '100px' : `${props.data.length * 30}px`};
    width: ${props => props.width}px;
    overflow: auto;
    background: #fff;
    border-bottom: 1px solid #eee;
`;

export const ListItem = styled.li`
    box-sizing: border-box;
    height: 30px;
    padding: 8px 0 0 10px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: ${props =>
        props.active ? props.theme.buttonActive : null};
    font-size: 14px;
    cursor: pointer;
`;

export const ToggleList = styled.img`
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 10px;
    top: 7px;
`;

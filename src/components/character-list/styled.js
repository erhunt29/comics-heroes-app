import styled from 'styled-components';
import dcBg from './images/dc-bg.jpg';
import marvelBg from './images/marvel-bg.jpg';

export const Root = styled.div``;

export const Container = styled.div`
    background-image: url(${props =>
        props.teamName === 'Marvel' ? marvelBg : dcBg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    width: 1100px;
    margin: 0 auto;
    padding-top: 220px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    background-color: #fff;
`;

export const Characters = styled.ul`
    padding: 0;
    display: ${props => (props.view === 'table' ? 'block' : 'flex')};
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Character = styled.li`
    list-style: none;
    cursor: pointer;
    font-family: Roboto, Arial, sans-serif;
    margin-bottom: 30px;
    width: 230px;
    height: ${props => (props.view === 'table' ? 'auto' : '300px')};
    background-color: #eee;
`;

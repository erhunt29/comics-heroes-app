import styled from 'styled-components';
import dcBg from './images/dc-bg.jpg';
import marvelBg from './images/marvel-bg.jpg';
import gallery from './images/gallery-button.png';
import table from './images/table-button.png';

export const Root = styled.div``;

export const Container = styled.div`
    background-image: url(${props =>
        props.teamName === 'Marvel' ? marvelBg : dcBg});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    width: 1100px;
    margin: 0 auto;
    padding-top: 175px;
    padding-bottom: 30px;
    box-sizing: border-box;
    background-color: #fff;
`;

export const Navigation = styled.nav`
    height: 65px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
`;

export const SeachForm = styled.form``;

export const SeachInput = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 20px;
    font-family: Roboto, Arial, sans-serif;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
    border: none;
    :focus {
        outline: none;
        border: 2px solid #7dadd9;
    }
`;

export const Filters = styled.div``;

export const View = styled.div`
    margin-left: 30px;
`;

export const Gallery = styled.button`
    cursor: pointer;
    background-image: url(${gallery});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 20px 20px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props => (props.active ? '#2ab0fd' : null)};
    :focus {
        outline: none;
    }
`;

export const Table = styled(Gallery)`
    background-image: url(${table});
    margin-left: 5px;
`;

export const Characters = styled.ul`
    padding-left: 40px;
    padding-right: 40px;
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

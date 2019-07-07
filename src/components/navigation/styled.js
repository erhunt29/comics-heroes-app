import styled from 'styled-components';
import sort from './images/sort-button.png';
import gallery from './images/gallery-button.png';
import table from './images/table-button.png';

export const NavigationWrapper = styled.nav`
    height: 65px;
    background-color: #eee;
    display: flex;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
`;

export const SeachForm = styled.form`
    margin-right: 30px;
`;

export const SeachInput = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 20px;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 15px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    :focus {
        outline: none;
        border: 2px solid #7dadd9;
    }
`;

const Button = styled.button`
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 20px 20px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${props =>
        props.active ? props.theme.buttonActive : null};
    transition: background-color 100ms ease-out;
    :focus {
        outline: none;
    }
`;
export const Filters = styled.div`
    display: flex;
    align-items: center;
`;

export const SortByName = styled(Button)`
    background-image: url(${sort});
    margin-right: 5px;
    transform: ${props =>
        props.sort === 'down' ? 'rotate3d(1,0,0, 180deg)' : null};
`;

export const View = styled.div`
    margin-left: 30px;
`;

export const Gallery = styled(Button)`
    background-image: url(${gallery});
`;

export const Table = styled(Button)`
    background-image: url(${table});
    margin-left: 5px;
`;

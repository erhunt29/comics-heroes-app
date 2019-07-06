import styled from 'styled-components';
import gallery from './images/gallery-button.png';
import table from './images/table-button.png';

export const NavigationWrapper = styled.nav`
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
    border: 2px solid rgba(0, 0, 0, 0.1);
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

import styled from 'styled-components';

export const Root = styled.div``;

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

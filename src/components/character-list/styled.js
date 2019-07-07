import styled from 'styled-components';

export const Root = styled.div`
    min-height: 900px;
    background-color: ${props =>
        props.isCharactersLoading ? 'rgba(0, 0, 0, 0.3)' : null};
`;

export const Preloader = styled.img`
    position: absolute;
    left: calc(50% - 27px);
    top: 280px;
`;

export const Characters = styled.ul`
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0;
    span {
        display: ${props => (props.view === 'table' ? 'block' : 'flex')};
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const Character = styled.li`
    list-style: none;
    cursor: pointer;
    font-family: Roboto, Arial, sans-serif;
    margin-bottom: 30px;
    width: 230px;
    height: ${props => (props.view === 'table' ? 'auto' : '300px')};
    background-color: #eee;

    &.character-appear {
        opacity: 0.01;
    }

    &.character-appear.character-appear-active {
        opacity: 1;
        transition: opacity 0.5s linear;
    }
`;

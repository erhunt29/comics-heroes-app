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

export const Error = styled.div`
    margin-top: 30px;
    font-size: 30px;
`;

export const Characters = styled.ul`
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 -15px;

    span {
        display: ${props => (props.view === 'table' ? 'block' : 'flex')};
        flex-wrap: wrap;
    }
`;

export const Character = styled.li`
    list-style: none;
    margin-bottom: ${props => (props.view === 'table' ? '30px' : '60px')};
    margin-right: 15px;
    margin-left: 15px;
    width: 230px;
    background-image: url(${props =>
        props.view === 'gallery' ? props.src : null});
    background-repeat: no-repeat;
    background-size: cover;
    height: ${props => (props.view === 'table' ? 'auto' : '320px')};
    background-color: #eee;
    position: relative;
    border: 1px solid #eee;

    span {
        position: absolute;
        bottom: ${props => (props.view === 'table' ? '0' : '-30px')};
        left: -1px;
        display: block;
        width: 232px;
        height: 30px;
        text-align: center;
        border: ${props => (props.view === 'table' ? null : '1px solid #eee')};
        box-sizing: border-box;
        padding-top: 6px;
    }

    &.character-appear {
        opacity: 0.01;
    }

    &.character-appear.character-appear-active {
        opacity: 1;
        transition: opacity 0.5s linear;
    }
`;

export const Image = styled.img``;

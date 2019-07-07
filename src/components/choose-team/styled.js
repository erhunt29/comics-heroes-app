import styled from 'styled-components';
import marvelLogo from './images/marvel.jpeg';
import dcLogo from './images/dc.png';

export const Root = styled.div`
    height: 900px;
`;

export const Heading = styled.h1`
    font-family: Roboto, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    color: #eee;
    margin: 30px 0;
    text-shadow: 0 3px 12px rgba(0, 0, 0, 0.9);
`;

export const Wrapper = styled.div`
    margin: 30px auto 20px auto;
    width: 350px;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    padding: 5px;
    color: #fff;
    width: 150px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props =>
        props.team === 'Marvel' ? '#ed1a23' : '#2ab0fd'};
    background-image: url(${props =>
        props.team === 'Marvel' ? marvelLogo : dcLogo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-origin: content-box;
    transition: all 100ms ease-out;
    cursor: pointer;
    :focus,
    :active {
        outline: none;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
    }

    :hover {
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
    }
`;

export const SeeAll = styled.span`
    font-size: 18px;
    border-bottom: 1px solid #000;
    cursor: pointer;
`;

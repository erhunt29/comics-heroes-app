import styled from 'styled-components';
import marvelLogo from './images/marvel.jpeg';
import dcLogo from './images/dc.png';
import banner from './images/banner.jpg';

export const Root = styled.div`
    height: 900px;
`;

export const Container = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #fff;
    height: 100%;
    width: 1100px;
    margin: 0 auto;
    padding-top: 220px;
    padding-bottom: 30px;
    box-sizing: border-box;
`;

export const Heading = styled.h1`
    font-family: Roboto, Arial, sans-serif;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    color: #000;
    margin: 0;
    text-shadow: 0 3px 12px rgba(0, 0, 0, 0.9);
`;

export const Wrapper = styled.div`
    margin: 30px auto 0 auto;
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

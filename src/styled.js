import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import marvelBg from './images/marvel-banner.jpg';
import dcBg from './images/dc-banner.jpg';
import allBg from './images/all-banner.jpg';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic');
  
  body {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.9);
    font-family: Roboto, Arial, sans-serif;
  }
  
  a {
    color: #000;
    text-decoration: none;
  }
`;

const theme = {
    buttonActive: '#2ab0fd',
};

export const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 30px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    background-color: #fff;
`;

export const Banner = styled.div`
    background-image: url(${props =>
        props.team === 'marvel'
            ? marvelBg
            : props.team === 'dc'
            ? dcBg
            : allBg});
    height: 175px;
    transition: all 500ms linear;
`;

export const Lang = styled.div`
    position: absolute;
    right: 40px;
    top: 192px;
`;

export default ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                {children}
            </React.Fragment>
        </ThemeProvider>
    );
};

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    background-color: black;
    color: white;
  }
  
  :root {
    --color-primary: #323A45;
    --color-white: #FFFFFF;
  }
`;

export default GlobalStyle;

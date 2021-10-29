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
    font-size: 62.5%; // 1rem = 10px
  }
  
  body {
    box-sizing: border-box;
    font-size: var(---default-font-size);
    
  }
  
  :root {
    // Colors
    --color-primary: #323A45;
    --color-white: #FFFFFF;
    --color-grey: hsl(0, 0%, 90%);
    --color-accent: #7214FF;
    // Fonts
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --big-font-size: 2.3rem;

  }
`;

export default GlobalStyle;

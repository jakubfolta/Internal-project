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
    --color-grey-2: #858585;
    --color-accent: #9047FF;
    --color-accent-dark: #7214FF;
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --medium-font-size-2: 2rem;
    --big-font-size: 2.5rem;
  }
`;

export default GlobalStyle;

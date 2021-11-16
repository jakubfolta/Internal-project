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
    --default-slides-amount: 5;
    --default-slides-spacing: 1rem;
    --default-width: 1152px;
    --main-page-padding: 1rem;
    --slide-width: calc(
    (
      (var(--default-width) - var(--main-page-padding) * 2) - 
      ((var(--default-slides-amount) - 1) * var(--default-slides-spacing))
    ) 
    / var(--default-slides-amount)
  );
    // Colors
    --color-primary: #323A45;
    --color-white: #FFFFFF;
    --color-black: #444;
    --color-black-2: #555;
    --color-grey: hsl(0, 0%, 90%);
    --color-grey-2: #858585;
    --color-grey-3: #ECECEC;
    --color-grey-4: #34373b;
    --color-grey-5: #BDC3C7;
    --color-grey-6: #e6e6e6;
    --color-grey-7: #bfbfbf;
    --color-accent: #9047FF;
    --color-accent-2: #9147ff;
    --color-accent-3: #f1c40f;
    --color-accent-dark: #7214FF;
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --medium-font-size-2: 2rem;
    --big-font-size: 2.4rem;
    --xl-font-size: 2.8rem;
  }
`;

export default GlobalStyle;

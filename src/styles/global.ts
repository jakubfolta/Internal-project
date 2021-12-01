import { extendTheme } from '@chakra-ui/react';
import { createGlobalStyle } from 'styled-components';

export const theme = extendTheme({
  colors: { white: "var(--color-background)" }
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html { font-size: 62.5%; } // 1rem = 10px 
  body { box-sizing: border-box; }
  
  :root {
    // Measures
    --default-slides-amount: 4;
    --default-slides-spacing: .5rem;
    --default-width: 1152px;
    --main-page-padding: 1rem;
    
    --slide-width: calc(
      (var(--default-width) - var(--main-page-padding) * 2) 
      / var(--default-slides-amount) - var(--default-slides-spacing) * 2
    );

    // GamePage component
    --default-cover-image-width: 26rem;
    --cover-image-spacing: 2rem;
    --menu-button-width: 8rem;

    // Colors
    --color-primary: #323A45;
    --color-background: #FAFAFA;
    --color-white: #FFFFFF;
    --color-white-2: #ECF0F1;
    --color-black: #444;
    --color-black-2: #555;
    --color-grey: hsl(0, 0%, 90%);
    --color-grey-2: #858585;
    --color-grey-3: #ECECEC;
    --color-grey-4: #34373b;
    --color-grey-5: #BDC3C7;
    --color-grey-6: #e6e6e6;
    --color-grey-7: #bfbfbf;
    --color-edit-bg: #f7f8fa;
    --color-edit: #4E4E4E;
    --color-accent: #9047FF;
    --color-accent-2: #9147ff;
    --color-accent-3: #f1c40f;
    --color-accent-dark: #7214FF;
    --color-accent-dark-2: #7314FF;
    --color-accent-dark-3: #6000ef;
    --color-facebook: #3b5998;
    --color-twitter: #55ACEE;
    --color-google: #d34836;
    
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --medium-font-size-2: 2rem;
    --big-font-size: 2.4rem;
    --xl-font-size: 2.8rem;
    --game-heading-size: 6rem;
    
    // Animations
    @keyframes appear { to { opacity: .5; } }
    @keyframes hide { 
      from { opacity: .5; }
      to { opacity: 0; } 
    }
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    /* outline: 0; */
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
 
  #__next {
    min-height: 100vh;
  }
`;

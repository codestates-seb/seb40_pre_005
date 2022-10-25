import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  // You can continue writing global styles here
  * {
    font-family: -apple-system,BlinkMacSystemFont,monospace,sans-serif;
  }
`;

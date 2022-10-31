import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  // You can continue writing global styles here
  * {
    font-family: -apple-system,BlinkMacSystemFont,monospace,sans-serif;

    // normalize에 있는 줄 알았는데 적용이 안 되는 거 같아서
    // 여기에 global로 직접 넣어준다. 
    box-sizing: border-box;
  }

  body {
    background-color: #F1F2F3;
  }
`;

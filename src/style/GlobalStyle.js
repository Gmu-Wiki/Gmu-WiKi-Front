import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSansKR';
    src: url('../assets/font/NotoSansKR-Regular.otf');  
  }

  * {
    font-family: 'NotoSansKR';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F1F1F5;
  }`;

export default GlobalStyle;

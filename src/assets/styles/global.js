import { createGlobalStyle } from 'styled-components';
import backDoces from '../images/backgroundDoces.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    font-size: 16px;
    background-image: url(${backDoces});
    background-size: cover;
  }

  button {
    cursor: pointer;
  }
`;

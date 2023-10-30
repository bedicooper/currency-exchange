import { createGlobalStyle } from 'styled-components';
import background from "./img/backgroundImage.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #000;
  background-image: url('${background}');
}
`;

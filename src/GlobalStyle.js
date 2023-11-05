import { createGlobalStyle } from 'styled-components';
import background from "./img/backgroundImage.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #000;
  background-image: url('${background}');
}
`;

export const theme = {
  color: {
    primary: '#12171e',
    secondary: '#ddd',
    accent: 'hsl(220, 20%, 15%)',
    accentHover: 'hsl(220, 20%, 20%)',
  },
  brakepoints: {
      moblieMax: 524,
  },

};
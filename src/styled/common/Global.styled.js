import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  &:before,
  &:after {
  box-sizing: border-box;
}
}
  
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
ul li {
  list-style: none;
}
@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

`;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
    margin: 0;
    padding: 0;
    font-family: Roboto, "Courier New", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;

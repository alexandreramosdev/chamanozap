import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  font-display:auto;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary,
small {
  display: block;
}
`

export default GlobalStyles

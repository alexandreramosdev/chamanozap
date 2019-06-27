import { createGlobalStyle } from "styled-components"
import bgwhats from '../images/background-whatsapp-7.jpg'
import sematic from "semantic-ui-css/semantic.min.css"

const GlobalStyles = createGlobalStyle`
${sematic}

  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  font-display:auto;
  min-height: 100vh !important;
}
body {  
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: min-content; 
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

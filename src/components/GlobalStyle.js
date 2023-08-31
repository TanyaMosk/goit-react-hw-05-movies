import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  /* background-color: gainsboro; */
  background-image: linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%); ;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul{
  margin: 0;
}

hr{
  margin: 0; 
   height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #333 inset;
}
`;
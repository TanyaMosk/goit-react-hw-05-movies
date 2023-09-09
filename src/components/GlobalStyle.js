import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  height: 100%;
  width: 100%;  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    
  /* background: linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%);  */
  
  background: linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%);
  background-attachment: fixed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul{
  margin: 0;
  padding: 0;
}
 img {
  display: block;
  /* max-width: 100%; */
  height: auto;
}

hr{
  margin: 0; 
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #333 inset;
}
`;
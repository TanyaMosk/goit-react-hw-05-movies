import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
   display: flex;
   justify-content: center;
   list-style: none;
  
  ul {    
   display: flex;
   justify-content: center;
   padding: 0;
  }

  li {
   margin: 0 5px;
   padding: 5px;
   cursor: pointer;
   border: 1px solid transparent;
   border-radius: 4px;   
   background: linear-gradient(to top, #09203f 0%, #537895 100%);
   color: gainsboro;
    
   &.active{     
     background: radial-gradient(780px at 37.8% 100.3%,
         rgb(19, 55, 115) 2.2%, 
         rgb(32, 7, 80) 20.2%, 
         rgb(27, 88, 111) 58.6%, 
         rgb(115, 88, 44) 75%, 
         rgb(99, 19, 90) 89.6%, 
         rgb(12, 51, 76) 96.1%);
     color: #fff;       
    }
  } 
    /* li:last-child{
    padding: 5px 20px;
  } */
  
  a {    
    text-decoration: none;    
    
  }    
`;

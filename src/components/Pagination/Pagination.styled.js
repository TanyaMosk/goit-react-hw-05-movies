import { styled } from 'styled-components';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
   display: flex;
   justify-content: center;
   list-style: none;
   margin: 30px 0;
  
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
      background: linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%);
      color: #fff;       
    }
  }   
  a {    
    text-decoration: none;        
  }    
`;

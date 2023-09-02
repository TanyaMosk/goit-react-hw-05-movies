import { styled } from 'styled-components';

export const SearchBoxForm = styled.form`
margin: 0 20px;
`;

export const SearchBoxButton = styled.button`
padding: 4px 10px;
background: linear-gradient(to top, #09203f 0%, #537895 100%);
color: gainsboro;
border-radius: 5px;

&:hover{
  background: radial-gradient(780px at 37.8% 100.3%,
    rgb(19, 55, 115) 2.2%, 
    rgb(32, 7, 80) 20.2%, 
    rgb(27, 88, 111) 58.6%, 
    rgb(115, 88, 44) 75%, 
    rgb(99, 19, 90) 89.6%, 
    rgb(12, 51, 76) 96.1%);
  color: #fff;  
}
`;

export const SearchBoxInput = styled.input`
width: 260px;
border-radius: 4px;
padding: 4px 10px;
`;
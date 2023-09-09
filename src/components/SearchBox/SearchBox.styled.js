import { styled } from 'styled-components';

export const SearchBoxForm = styled.form`
/* margin: 0 20px; */
margin: 20px 0;
text-align: center;
`;

export const SearchBoxButton = styled.button`
padding: 10px 10px;
background: linear-gradient(to top, #09203f 0%, #537895 100%);
color: gainsboro;
border-radius: 5px;

&:hover{
  background: linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%);
  color: #fff;  
}
`;

export const SearchBoxInput = styled.input`
width: 460px;
border-radius: 4px;
padding: 8px 10px;
`;
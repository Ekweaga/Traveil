import styled from 'styled-components'
import {Link} from'gatsby'


export const Button = styled(Link)`
background:${({primary})=> (primary ? '#F26A2E' : '#0778F1')};
white-space:nowrap;
padding:${({big})=> (big ? '16px 40px' : '10px 32px')};
color:white;
outline:none;
border:none;
cursor:pointer;
transition:0.3s !important;
border-radius:${({round})=> (round ? '50px' : '')};
min-width:100px;
text-decoration:none;

&:hover{
background:white;
color:white;
transform:translateY(-2px);
background:${({primary})=> (primary ? '#0778F1' : '#F26A2E')};

}

`
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useState,useEffect } from 'react';
import logo3 from '../images/icon-hamburger.svg';
import logo4 from '../images/icon-close.svg';
import './header.css'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md';
import { menudata } from "../data/menudata";
import { Button } from "./button";

const Header = () => {
 
   const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth)
  const tooglenav=()=>{
    settoogle(true)
    setclose(false)
    setopen(true)
  }
  const toogleclose = ()=>{
    settoogle(false);
    setclose(true)
    setopen(false)
  }
  useEffect(()=>{
    const changewidth = ()=>{
      setscreenwidth(window.innerWidth)
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
   <Nav>
<Link to='/' style={{color:'white',textDecoration:'none',cursor:'pointer',padding:'10px'}}
>TRAVEIL</Link>
<Bars/>
<Cancel/>
<NavMenu>
  {menudata.map((item)=>{
    return (  <NavLink to={item.link}>{item.title}</NavLink>)
  })}
  
</NavMenu>
<Navbtn>
  <Button primary="true" round="true" to="/trips">Book a Flight</Button>
</Navbtn>
   </Nav>
   
  )
}
  




export default Header

const Nav = styled.nav`
display:flex;
justify-content:space-between;
padding:0.5rem calc((100vw - 1300px) / 2);

background:transparent;
height:80px;
positon:relative;
align-items:center;
`
const NavLink = styled(Link)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
margin-left:15px;
`
const Bars = styled(FaBars)
`
display:none;
color:white;

@media screen and (max-width:700px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-100%,75%);
  font-size:30px;
}
`
const Cancel = styled(MdCancel)
`
display:none;
color:white;

@media screen and (max-width:700px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-100%,75%);
  font-size:30px;
}
`
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:30px;


@media screen and (max-width:700px){
  display:none;
}
`
const  Navbtn = styled.div`
display:flex;
align-items:center;
margin-right:25px;
@media screen and (max-width:700px){
  display:none;
}

`


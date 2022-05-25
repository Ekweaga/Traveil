import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect,useState} from 'react'

function Footer() {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
  return (
   <FooterContainer>
       <FooterLinksWrapper data-aos="zoom-in">
           <FooterDesc>
               <h1>Traveil</h1>
               <p>We ensure to create and provide the best experiences for our customers</p>
           </FooterDesc>
          
       </FooterLinksWrapper>
       <FooterLinksWrapper>
       <FooterLinkItems>
               <FooterLinkTitle>Contact Us</FooterLinkTitle>
               <FooterLink to="/about" data-aos="slide-up">About</FooterLink>
               <FooterLink to="/trips" data-aos="slide-up">Destinations</FooterLink>
               <FooterLink to="/contact" data-aos="slide-up">Contact</FooterLink>
           </FooterLinkItems>
       <FooterLinkItems>
               <FooterLinkTitle>Videos</FooterLinkTitle>
               <FooterLink to="" data-aos="slide-up">Influencer</FooterLink>
               <FooterLink to="" data-aos="slide-up">Services</FooterLink>
               <FooterLink to="" data-aos="slide-up">Traveil</FooterLink>
           </FooterLinkItems>
           <FooterLinkItems>
               <FooterLinkTitle>Social Media</FooterLinkTitle>
               <FooterLink to="" data-aos="slide-up">Twitter</FooterLink>
               <FooterLink to="" data-aos="slide-up">Instagram</FooterLink>
               <FooterLink to="" data-aos="slide-up">Pinterest</FooterLink>
           </FooterLinkItems>
       </FooterLinksWrapper>
     
      
   </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
padding:5rem calc((100vw - 1100px) / 2);
display:grid;
grid-template-columns: repeat(2, 1fr);
color:black;
background-color:#fafafb;
`
const FooterLinksWrapper = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);

@media screen and (max-width:820px){
    grid-template-columns:1fr
}
`
const FooterLinkItems = styled.div`
display:flex;
flex-direction:column;
align-items;flex-start;

@media screen and (max-width:400px){
    padding:1rem;
}

`
const FooterLinkTitle = styled.h2`
font-size:14px;
margin-bottom:16px;
`
const FooterLink = styled(Link)`
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;
color:#3d3d4e;

&:hover{
    color:red;
    transition:0.3s ease-out;
}
`
const FooterDesc = styled.div`
padding: 0 2rem;
h1{
    margin-bottom:3rem;
    color:#f26a2e;

    @media screen (max-width:400px){
        padding:1rem;
    }
}
`
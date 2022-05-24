import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'

import tq from '../assets/images/1.jpeg'
import tr from '../assets/images/tx.jpeg';

function Testony() {
  
   
  return (
    <TestimonialsContainer>

        <TopLine> Testimonials</TopLine>
        <Description>What People are Saying</Description>
        <ContentWrapper>
            <ColumnOne>
            <Testimonial>
                <IoMdCheckmarkCircleOutline style={{color:'#f9b19b',marginBottom:'2rem',fontSize:'2rem'}}/>
                <h3>Jackson Mendes</h3>
                <p>The greatest experience of my travelling career. It was fun exploring the mountains and they made it super easy
                    to book my trip and accommodation
                </p>
            </Testimonial>
            <Testimonial>
                <FaRegLightbulb style={{color:'#3fffa8',marginBottom:'2rem',fontSize:'2rem'}}/>
                <h3>Rihanna Victoria</h3>
                <p>The greatest experience of my travelling career. It was fun exploring the mountains and they made it super easy
                    to book my trip and accommodation
                </p>
            </Testimonial>
            </ColumnOne>
            <ColumnTwo>
          <img src={tq} style={{height:'100%', borderRadius:'10px',width:'100%',marginTop:'20px'}}/>
          <img src={tr} style={{height:'100%', borderRadius:'10px',width:'100%'}}/>
            </ColumnTwo>
        </ContentWrapper>
       
        </TestimonialsContainer>
  )
}

export default Testony

const TestimonialsContainer = styled.div`
width:100%;
background:#fcfcfc;
color:black;
padding:5rem calc((100vw - 1300px) / 2);
height:100%;

`
const TopLine = styled.p`
color:#077bf1;
font-size:1rem;
padding-left:2rem;
margin-bottom:0.75rem;


`
const Description = styled.p`
text-align:start;
padding-left:2rem;
margin-bottom:4rem;
font-size:clamp(1rem , 2vw, 2rem);
font-weigt:bold;

`
const ContentWrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:0 2rem;

@media screen and (max-width:760px){
    grid-template-columns:1fr;
}


`
const ColumnOne = styled.div`
display:grid;
grid-template-rows:1fr 1fr;

`
const Testimonial = styled.div`
padding-top:1rem;
padding-right:2rem;

h3{
    margin-bottom:1rem;
    font-size:1.5rem;
    font-style:italic;
}
p{
    color:#3b3b3b;
}

`
const ColumnTwo = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:10px;


@media screen and (max-width:700px){
    grid-template-columns:1fr;
    grid-gap:10px;
}
`
const Images = styled(Img)`
border-radius:10px;
height:100%;

`
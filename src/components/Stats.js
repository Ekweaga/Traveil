import React from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi';
import{MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect,useState} from 'react'

import{FaMoneyCheck} from 'react-icons/fa'

function Stats() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const StatsData = [
    {
        icon : (<GiEarthAmerica style={{color:'blue'}} />),
        title:"Over 500 Places",
        desc:"Travel to over 500 unique destinations"
    },
    {
      icon : (<MdAirplanemodeActive style={{color:'green'}} />),
      title:" 1 thousand Trips Made",
      desc:"Over 1 thousand Trips completed last year"
    },
    {
      icon : (<MdTimer  style={{color:'red'}}/>),
      title:"Fastest support services",
      desc:"Reach our support team 24/7"
    },
    {
      icon : (<FaMoneyCheck style={{color:'orangered'}} />),
      title:"Best Travel Deals",
      desc:"We give best prices and services"
    }
    
  ]
  return (
   <StatsContainer>
       <Heading data-aos="zoom-in">
            Why Choose Us?
       </Heading>
       <Wrapper>
        {StatsData.map((data,index)=>{
          return (
            <StatsBox key={index} data-aos="slide-up">
              <Icon>{data.icon}</Icon>
              <Title>{data.title}</Title>
              <Desc>{data.desc}</Desc>
            </StatsBox>
          )
        })}
       </Wrapper>

   </StatsContainer>
  )
}

export default Stats;

const StatsContainer = styled.div`
width:100%;
background:white;
display:flex;
flex-direction:column;
justify-content:center;
padding:4rem calc((100vw - 1300px) / 2)

`

const Heading = styled.h1`
text-align:center;
font-size:clamp(1.5rem, 5vw , 2rem);
margin-bottom:3rem;
padding:0 2rem;
`
const Wrapper = styled.div`
display:grid;
grid-template-columns:repeat(4 ,1fr);
grid-gap:10px;

@media screen and (max-width:760px){
  grid-template-columns:1fr
}

@media screen and (max-width:500px){
  grid-template-columns:1fr
}


`
const StatsBox = styled.div`
height:100%;
width:100%;
padding:2rem;

`
const Icon = styled.div`
font-size:3rem;
margin-bottom:1rem;

`

const Title = styled.div`
font-size:clamp(1rem , 2.5vw , 1.5rem);
margin-bottom:0.5rem;

`
const Desc = styled.p`


`

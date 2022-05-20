import React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import video from '../assets/videos/tt.mp4'

function Hero() {
    const HeroContainer = styled.div`
    `
  return (
    <Herocontainer>
<HeroBg>
  <VideoBG src={video} type="video/mp4" autoPlay/>
</HeroBg>
<HeroContent>
  <HeroItems>
    <HeroH1>
        TRAVEIL
    </HeroH1>
    <HeroP>Makes travelling easier</HeroP>
    <Button primary="true" big="true" round="true" to='/trips'>Travel Now</Button>
  </HeroItems>

</HeroContent>
    </Herocontainer>
  )
}

export default Hero;

const Herocontainer = styled.div`
background-color:black;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
padding:0 1rem;
position:relative;
margin-top:-80px;
color:white;
z-index:-111;

::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:2555;
  background:rgba(0,0,0,0.3);
}

`

const HeroBg = styled.div`
position:absolute;
top:0;
right:0;left:0;
width:100%;
overflow:hidden;
height:100%;
`

const VideoBG = styled.video`

width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

const HeroContent = styled.div`
z-index:3;
height:calc(100vh - 80px);
max-height:100%;
padding:0rem calc((100vw - 1300px) / 2);

`

const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;
padding:0;
height:100vh;
line-height:1.1;
max-height:100%;

`
const HeroH1 = styled.h1`
color:white;
font-size:clamp(1.5rem, 6vw, 4rem);
margin-bottom:1.5rem;
letter-spacing:3px;
padding:0.1rem;

`
const HeroP = styled.p`
font-size:13px;
margin-bottom:2rem;
`
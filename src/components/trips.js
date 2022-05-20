import React from 'react';
import styled from 'styled-components'

function Trips() {
  return (
   <Productscontainer>
       <Productsheading>
           
            Places To Go
       </Productsheading>
       <Productswrapper>
               wrapper
           </Productswrapper>
   </Productscontainer>

  )
}

export default Trips

const Productscontainer = styled.div`
min-height:100vh;
padding:6rem calc((100vw - 1300px) / 2);
background:white;
color:black;
`
const Productsheading = styled.div`
text-align:center;
font-size:clamp(1.2rem , 5vw , 3rem);
margin:20px;


`

const Productswrapper = styled.div``
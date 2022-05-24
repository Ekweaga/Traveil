import React from 'react';
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import {StaticImage} from 'gatsby-plugin-image'
import t1 from "../assets/images/t3.jpg"
import {Button} from './button'
import {ImLocation} from 'react-icons/im'

function Trips() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allTripsJson {
          edges {
            node {
              button
              name
              img {
                childImageSharp {
                  fluid(maxWidth:300, quality:100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)
    function gettrips(data){
      const tripsarray = [];
      data.allTripsJson.edges.forEach((item,index)=>{
        tripsarray.push(
          <ProductCard key={index}>
            <ProductImg src={item.node.img.childImageSharp.fluid.src} fluid={item.node.img.childImageSharp.fluid}  />
            <ProductInfo>
              <TextWrap>
                <ImLocation/>
                <ProductTitle>{item.node.name}</ProductTitle>
              </TextWrap>
              <Button to="/trips" primary="true" round="true" css={`position:absolute; top:420px; font-size:14px;`}>{item.node.button}</Button>
            </ProductInfo>
          </ProductCard>
        )
      })
      return tripsarray
    }

    

  
 return (
  <> <Productscontainer>
       <Productsheading>
           
          Mark A Destination
       </Productsheading>
       <Productswrapper>
              {gettrips(data)}
           </Productswrapper>
   </Productscontainer>
  
 
</>
  )
}

export default Trips

const Productscontainer = styled.div`
min-height:100vh;
padding:6rem calc((100vw - 1300px) / 2);
background:white;
color:white;
`
const Productsheading = styled.div`
text-align:center;
font-size:clamp(1rem , 2vw , 3rem);
margin:20px;
color:black;
font-family: Verdana, Geneva, Tahoma, sans-serif;


`

const Productswrapper = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;

@media screen and (max-width:1200px){
  grid-template-columns:1fr 1fr;
}

@media screen and (max-width:868px){
  grid-template-columns: 1fr;
}
`
const ProductCard = styled.div`
line-height:2;
width:100%;
height:500px;
position:relative;
border-radius:10px;
transitions:0.2s ease;

`
const ProductImg = styled(Img)`
height:100%;
max-width:100%;
position:relative;
border-radius:10px;
filter:brightness(70%);
transition:0.4s cubic-bezier(0.075,0.02,0.165,1);

&:hover{
  filter:brightness(100%);
}

`
const ProductInfo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0 2rem;


@media screen and (max-width:280px){
  padding:0 1rem;
}

`
const ProductTitle = styled.div`
font-weight:400;
font-size:1rem;
margin-left:0.5rem;

`
const TextWrap = styled.div`
display:flex;
align-items:center;
position:absolute;
top:375px;

`

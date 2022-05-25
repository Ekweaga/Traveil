import React from 'react'
import styled from 'styled-components'
import t4 from '../assets/images/t4.jpg'
import { Button } from './button';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect,useState} from 'react'

function Email() {
    const [inputset, setinputset]= useState("");
    const [error, seterror]=useState(null);
    
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(inputset != '' ){
            alert("Email has been sent successfully");
            setinputset("")
        }
        else{
            alert("Input is empty, check")
        }
    }
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
  return (
    <EmailContainer data-aos="zoom-in">
        <EmailContent>
            <h1>Get Access to our Exclusive travel bonuses</h1>
            <p>Sign up for your newsletter below to get $350 discount off your first trip</p>
            <form onSubmit={handlesubmit}>
                <FormWrap >
                    <label>
                        <input type="email" placeholder="Enter Email" id="email"data-aos="slide-up" value={inputset} onChange={(e)=>setinputset(e.target.value)}/>
                    </label>
                    <Button as="button" primary="true" data-aos="slide-up" round="true" type="submit" css={`height:48px;
                    @media screen and (max-width:768px){
                        width:100%;
                        min-width:350px;
                        margin-top:30px
                    }
                    @media screen and (max-width:400px){
                        width:100%;
                        min-width:250px;
                        margin-top:30px;
                    }
                    
                    `}>Sign Up</Button>
                </FormWrap>
            </form>
        </EmailContent>
    </EmailContainer>
  )
}

export default Email


const EmailContainer = styled.div`
background:linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%),url(${t4}) no-repeat center;
background-size:cover;
height:450px;
width:100%;
display:flex;
justify-content:center;
color:white;
align-items:center;
padding: 5rem calc((100vw - 1300px) / 2)
`
const EmailContent = styled.div`
display:flex;
flex-direction:column;
align-items:center;

h1{
    text-align:center;
    margin-bottom : 1rem;
    font-size: clamp(1rem , 3vw , 2rem);
    padding:0 1rem;
}

p{
    text-align:center;
    font-size: clamp(1rem , 2vw , 1rem);
    padding:0 1rem;
    margin-bottom:2rem;

}
form{
    z-index:100
}
`
const FormWrap = styled.div`
input{
    padding:1rem 1.5rem;
    outline:none;
    width:350px;
    height:48px;
    border:none;
    margin-right:1rem;
    border-radius:50px;

    @media screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        padding:0 1rem;
        flex-gap:10px;

        input{
            margin-bottom:30px;
            width:100%;
            margin-right:0;
        }
    }
}

`
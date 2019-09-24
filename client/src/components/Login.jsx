
import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FormBorderColor, MainFontFamily, LoginColor, ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont } from './Styling';

const RegistrationBox = styled.div `
font-family: ${MainFontFamily};
display:flex;
height:100%vh;
font-size:62.5%;
align-items:center;
margin:8% 12%;
`
const MeaningfulLife = styled.div `
font-size:3rem;
`

const LoginDiv = styled.div `
display:flex;
flex-direction:column;
background:${LoginColor};
border-radius:2%;
width:40%;
margin-left:18%;
padding:10% 5%;

`
const Label = styled.label `
text-align:left;
color:white;
font-size:1.75rem;
`

const Form = styled.form `
width:90%;
margin:5% 0;
`

const Input = styled.input `
width:100%;
height:3%;
font-size:1.75rem;
border: 4px solid ${FormBorderColor};
border-radius: 4px;
background: ${LoginColor};
`

const Button = styled.button `
width:100%;
font-size:1.5rem;
background-image: ${ButtonBackground};
color: ${ButtonFont};
    :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
    }
    
`

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: ''})


    const changeHandler = event => {
        setUser({...user, [event.target.username]: event.target.value})
        console.log(
            "handleChange",
            event.target.username,
            event.target.value,
        );
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         axios
            .post("http://build-your-life.herokuapp.com/api/users/login")
            .then(result => {
            // props.history.push('');
            console.log ('Logged in', result)
            setUser({ username: '', password: ''})
        })
    
    }

     

return (
    <RegistrationBox>
        <MeaningfulLife>
            <h1>Welcome<div>Back.</div></h1>
        </MeaningfulLife>
        <LoginDiv> 
            <Label>Username</Label>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" name="username" value={user.username} onChange={changeHandler}/>
            </Form>
            <Label>Password</Label>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="password"  placeholder="Password" value={user.password} onChange={changeHandler}/>
            </Form>

            <Form onSubmit={handleSubmit}>
                <Button type="submit">Log In</Button>
            </Form>
        </LoginDiv>       
    </RegistrationBox>
)
}

export default Login
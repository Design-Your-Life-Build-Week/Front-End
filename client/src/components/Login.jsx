
import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FormBorderColor, MainFontFamily, LoginColor, ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont } from './Styling';
import NavBar from "../components/NavBar";
const RegistrationBox = styled.div `
font-family: ${MainFontFamily};
display:flex;
height:90vh;
font-size:62.5%;
align-items:center;
margin:0 12%;
min-width:100vh;

`
const WelcomeBack = styled.div `
font-size:3rem;
width:45%;
`

const LoginDiv = styled.div `
display:flex;
flex-direction:column;
background:${LoginColor};
border-radius:2%;
max-width:30%;
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
color:ghostwhite;
width:100%;
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
        setUser({...user, [event.target.name]: event.target.value})
    }
     const handleSubmit = event => {
         event.preventDefault();
         console.log(user);
         axios
            .post("https://build-your-life.herokuapp.com/api/users/login", user)
            .then(result => {
            console.log(result)
            localStorage.setItem("token", result.data.token);    
            if(result.data.token){
                props.history.push("/categories")
            }
            setUser({ username: '', password: ''})
            alert(result.data.message)
        })
    
    }

    //  console.log(name);

return (
    <>
    <NavBar/>

    <RegistrationBox>
        <WelcomeBack>
            <h1>Welcome<div>Back.</div></h1>
        </WelcomeBack>
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
    </>
)
}

export default Login
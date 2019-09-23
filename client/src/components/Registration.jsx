import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {axiosLoginAuth} from '../../'



const RegistrationBox = styled.div `

`

const Registration = (props) => {
    const [user, setUser] = useState({ name: '', password: ''})

const changeHandler = event => {
    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value })
    console.log(
        "handleChange",
        event.target.name,
        event.target.value,
    );
}


const handleSubmit = event => {
    event.preventDefault();

    axios
        .post("build-your-life.herokuapp.com/api/users/register", user)
        .then( result => {
               localStorage.setItem('token', result.data['access_token']);
               localStorage.setItem('tokenType', result.data['token_type']);
               console.log("Logged in as", result.data)
            })
            .catch(error => {
                console.log("Something went wrong...", error)
            })
    setUser({
        name: '', password: ''
    })
    }

    return (
        <RegistrationBox>
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" value={user.name} onChange={changeHandler}/>
                <input type="text" name="password"  placeholder="Password" value={user.password} onChange={changeHandler}/>

                <button type="submit">Create Account</button>
            </form>
        </RegistrationBox>
    )
    
}

    

    export default Registration;
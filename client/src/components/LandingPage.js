import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import Logo from '../images/LandingLogo.png';
import { ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont, MainFontFamily } from './Styling';


// Main Landing Page Wrapper
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    width: 80%;
    height: 80vh;
    margin: auto;
`;

//image wrapper
const ImgWrapper = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

// Title and Button Content Wrapper
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 25vh;
    width: 45%;
    font-family: ${MainFontFamily};
`;

// Main Title
const Title = styled.h1`
    font-size: 4.0rem;
`;

// Sub Title
const SubTitle = styled.h3`
    font-size: 1.5rem;
`;

// Start Now Button
const StartButton = styled.button`
    background-image: ${ButtonBackground};
    color: ${ButtonFont};
    font-size: 2.0rem;
    text-align: center;
    border: none;
    padding: 20px 40px;
    border-radius: 6px;
    margin: 50px 0 0;

    :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
    }
`;

export default function LandingPage() {
    return (
        <Wrapper>
            <ImgWrapper>
                <img src={Logo} style={{height: "100%"}} alt="main"/>
            </ImgWrapper>
            <TitleWrapper>
                <Title>Design Your Life</Title>
                <SubTitle>Who you are - What you do - What you believe</SubTitle>
                <Link to="Register"> 
                    <StartButton>Start Now</StartButton>
                </Link>
            </TitleWrapper>
        </Wrapper>     
    )
}
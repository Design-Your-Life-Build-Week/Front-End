import React from 'react';
import styled from 'styled-components';
import Logo from './images/Logo.png';

// Main Landing Page Wrapper
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    width: 80%;
    height: 80vh;
`;

// Title and Button Content Wrapper
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 25vh;
`;

// Main Title
const Title = styled.h1`
    font-size: 2.0rem;
`;

export default function LandingPage() {
    return (
        <Wrapper>
            <img src={Logo} style={{height: "100%"}} alt="main"/>
            <TitleWrapper>
                <Title>Design Your Life</Title>
                <h3>Who you are - What you do - What you believe</h3>
                <button>Start Now</button>
            </TitleWrapper>

        </Wrapper>     
    )
}
import React from 'react';
import styled from 'styled-components';
import Logo from './images/Logo.png';

// Main Landing Page Wrapper
const Wrapper = styled.div`
    width: 80%;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
`;

// Title and Button Content Wrapper
const TitleWrapper = styled.div`
    
`;

export default function LandingPage() {
    return (
        <Wrapper>
            <img src={Logo} style={{height: "100%"}} alt="main"/>
            <div>
                <h1>Design Your Life</h1>
                <h3>Who you are - What you do - What you believe</h3>
                <button>Start Now</button>
            </div>

        </Wrapper>     
    )
}
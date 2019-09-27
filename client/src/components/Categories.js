import React, { useState, useEffect } from 'react';
// import dummData
import { Link } from "react-router-dom";


import styled from 'styled-components';
import {axiosLoginAuth} from "../utils/axiosLoginAuth";
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground } 
    from './Styling';
import LoggedInNav from "./LoggedInNav";
    
const H1 = styled.h1`
    color:pink;
    font-family: ${MainFontFamily};
`

const ActivityCards = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly
;
`
const CardWrapper = styled.div`
    display: flex;
    border-radius: 6px;
    margin: 20px;
    width: 400px;
    height: 200px;
    font-family: ${MainFontFamily};
    background-image: ${CardBackground};
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    text-align: center;
}`;
const Categories = () => {

    return (
        <>
        <LoggedInNav />
            <ActivityCards>
                <H1>Pick A Categories</H1> 
                <Link to="/physical">
                <CardWrapper>Physical and Health</CardWrapper>
                </Link>
                <Link to="/family">
                <CardWrapper>Family and Relationships</CardWrapper>
                </Link>
                <Link to="/spiritual">
                <CardWrapper>Spiritual</CardWrapper>
                </Link>
                <Link to="/personal">
                <CardWrapper>Personal</CardWrapper>
                </Link>
                <Link to="/mind">
                <CardWrapper>Mind</CardWrapper>
                </Link>
                <Link to="/work">
                <CardWrapper>Work and Career</CardWrapper>
                </Link>
                <Link to="/financial">
                <CardWrapper>Financial</CardWrapper>
                </Link>
            </ActivityCards>
        </>
        )
}

export default Categories;
import React from 'react';
// import dummData
import { Link } from "react-router-dom";


import styled from 'styled-components';
import { MainFontFamily, CardBackground } 
    from './Styling';
    
const H1 = styled.h1`
    color:pink;
    font-family: ${MainFontFamily};
   
`

const ActivityCards = styled.div `
   

`

const CatDiv = styled.div `
display:flex;
margin: 3%
width:94%;
justify-content:space-evenly;

`

const CardWrapper = styled.div`
font-size: 1.5em;
margin: 20px;
font-family: ${MainFontFamily};
display:flex;
background-image: ${CardBackground};
border-radius: 6px;
`
    
    // width: 400px;
    // height: 200px;
    // margin-block-start: 0.83em;
    // margin-block-end: 0.83em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    // font-weight: bold;
    // text-align: center;
;
const Categories = () => {

    return (
        <>
            <ActivityCards>
                <H1>Pick A Category</H1> 
                <CatDiv>
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
                </CatDiv>
            </ActivityCards>
        </>
        )
}

export default Categories;
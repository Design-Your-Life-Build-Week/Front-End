import React, { useState, useEffect } from 'react';
// import dummData
import { Link } from "react-router-dom";


import Physical from '../components/Categories/Physical';
import Health from '../components/Categories/Health';
import Family from '../components/Categories/Family';
import Spiritual from '../components/Categories/Spiritual';
import Personal from '../components/Categories/Personal';
import Mind from '../components/Categories/Mind';
import Work from '../components/Categories/Work';
import Financial from '../components/Categories/Financial';

import styled from 'styled-components';
import { CatergoriesContext, CategoriesContext } from '../contexts/CategoriesContext';
import {axiosLoginAuth} from "../utils/axiosLoginAuth";
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground } 
    from './Styling';

    
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
    // hooks
    const [physical, setPhysical] = useState();
    const [personal, setPersonal] = useState();
    const [work, setWork] = useState();
    const [family, setFamily] = useState();
    const [financial, setFinancial] = useState();
    const [mind, setMind] = useState();
    const [spititual, setSpiritual] = useState();


    useEffect(() => {
        axiosLoginAuth()
            .get("https://build-your-life.herokuapp.com/api/categories")
            .then(res => {
                console.log(res)
                setPhysical(res.data[0])
                setPersonal(res.data[1])
                setWork(res.data[2])
                setFamily(res.data[3])
                setFinancial(res.data[4])
                setMind(res.data[5])
                setSpiritual(res.data[6])
            })
            .catch(err => console.log(err))
            
    }, [])

    return (
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

        )
}

export default Categories;
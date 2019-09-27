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

const LinkDiv = styled.div `
    font-size:30px;
`

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
            <LinkDiv>
                <H1>Your Categories</H1> 
                <Link to="/physical">
                    <p>Physical</p>
                </Link>
                <Link to="/family">
                    <p>Family</p>                
                </Link>
                <Link to="/spiritual">
                    <p>Spiritual</p>
                </Link>
                <Link to="/personal">
                <p>Personal</p>
                </Link>
                <Link to="/mind">
                <p>Mind</p>
                </Link>
                <Link to="/work">
                <p>Work</p>
                </Link>
                <Link to="/financial">
                <p>Financial</p>   
                </Link>
            </LinkDiv>

        )
}

export default Categories;
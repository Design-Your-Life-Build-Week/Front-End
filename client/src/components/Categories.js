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

const Categories = () => {
    // hooks
    const [categories, setCategories] = useState();
    const [physicalCategories, setPhysicalCategories] = useState();
    const [personalCategories, setPersonalCategories] = useState();
    const [workCategories, setWorkCategories] = useState();

    useEffect(() => {
        axiosLoginAuth()
            .get("https://build-your-life.herokuapp.com/api/categories")
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
                setPhysicalCategories(res.data)
                console.log(physicalCategories)
            })
            .catch(err => console.log(err))
            
    }, [])

    return (
        <CategoriesContext.Provider value={{ categories }} >
            <div>
                <H1>Your Categories</H1> 
                <Physical />
                <Health />
                <Family /> 
                <Spiritual />
                <Personal />
                <Mind />
                <Work />
                <Financial />   
            </div>
        </CategoriesContext.Provider>
        )
}

export default Categories;
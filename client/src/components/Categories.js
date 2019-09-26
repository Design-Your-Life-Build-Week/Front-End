import React, { useState, useEffect } from 'react';
// import dummData

import CategoryCard from './CategoryCard';
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
    const [category, setCategory] = useState({})
    
    
    const changeHandler = e => {
        setCategory({...category, [e.target.name]:e.target.value});
        console.log('checking category onChange:', category);
    };

    useEffect(() => {
        axiosLoginAuth()
            .get("https://build-your-life.herokuapp.com/api/categories")
            .then(res => {
                console.log(res.data)
                setCategories(res.data)
            })
            .catch(err => console.log(err))
            
    })

    return (
        <CategoriesContext.Provider value={{ categories }} >
            <div>
                <H1>Your Categories</H1>            
                {categories && categories.map(category => {
                    return <CategoryCard key={category.id} category={category} /> 
                } )}
            </div>
        </CategoriesContext.Provider>
        )
}

export default Categories;
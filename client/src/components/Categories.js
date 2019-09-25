import React, { useState, useEffect } from 'react';
// import dummData

import CategoryCard from './CategoryCard';

import { CatergoriesContext, CategoriesContext } from '../contexts/CategoriesContext';
import {axiosLoginAuth} from "../utils/axiosLoginAuth";

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
                <h1>Your Categories</h1>            
                {categories && categories.map(category => {
                    return <CategoryCard key={category.id} category={category} /> 
                } )}
            </div>
        </CategoriesContext.Provider>
        )
}

export default Categories;
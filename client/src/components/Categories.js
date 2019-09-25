import React, { useState, useEffect } from 'react';
// import dummData
import { Link } from "react-router-dom";
import CategoryCard from './CategoryCard';

import { CategoriesContext } from '../contexts/CategoriesContext';
import {axiosLoginAuth} from "../utils/axiosLoginAuth";

const Categories = () => {
    // hooks
    const [categories, setCategories] = useState();

    useEffect(() => {
        axiosLoginAuth()
            .get("https://build-your-life.herokuapp.com/api/categories")
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => console.log(err))
            
    }, [categories])

    return (
        <CategoriesContext.Provider value={{ categories }} >
            <div>
                <h1>Your Categories</h1>            
                {categories && categories.map(category => {
                    return <Link to="/activityBuilder" key={category.id}><CategoryCard key={category.id} category={category} /></Link> 
                } )}
            </div>
        </CategoriesContext.Provider>
        )
}

export default Categories;
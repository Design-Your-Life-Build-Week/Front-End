import React, { useState } from 'react';
// import dummData
import { data } from "../data";

const Categories = () => {
    // hooks
    const [state, setState] = useState(data);
    const [category, setCategory] = useState({})

    const changeHandler = e => {
        setCategory({...category, [e.target.name]:e.target.value});
        console.log('checking category onChange:', category);
    };

    const submitHandler = e => {
        e.preventDefault();
        setState({...state, categories: [...state.categories, category]});
        console.log('submit fired!');
    };

    return (
        <div>
            <h1>Your Categories</h1>
    
            <form onSubmit={submitHandler}>
                {console.log('new state:',state)}
                <input 
                type="text"
                name="name"
                value={category.name}
                onChange={changeHandler}
                placeholder="Category Name"
                />
                <button>Add</button>
            </form>
            
            
            {state.categories.map(i => {
                return <h1 key={i.id}>{i.name}</h1>
            })}
        </div>
        )
}

export default Categories;
import React from 'react';

class Categories extends React.Component {
    state = {
        categories: [
            {name: "fitness",
            activities: [
                {"name": "Running", dateCreated: "09212019", starRating: 5, id: 456},
                {"name": "Swimming", dateCreated: "09212019", starRating: 5, id: 456},
                {"name": "Zumba", dateCreated: "09302019", starRating: 5, id: 456}
            ],
            dateCreated: '',
            id: 123
            },
        ],
     
    }
    handleChange = (e) => {
        this.setState({ ...this.state.categories, [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        currentDate: Date.now();
        // const newCategory = { name: "this.state.categories.name", dateCreated: currentDate, id: currentDate, starRating: 0 }
    }
    render() {
        return (

        <div>
            <h1>Your Categories</h1>
          {this.state.categories.map(category => <h3 category={category} > {category.name} </h3>)}
            <form>
                <input 
                    name = "catergory"
                    value = {this.state.categories.name}
                    onChange = {this.handleChange}
                    placeholder= "Add a Category"
                    />
            </form>
        </div>
        )
    }
}

export default Categories; 
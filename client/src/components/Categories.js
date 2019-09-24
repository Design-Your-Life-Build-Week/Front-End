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
            id: 123,
            },
            
        ],
        // category: {}?
    }
    handleChange = (e) => {
        this.setState({ ...this.state.categories,  [e.target.name]: e.target.value});
        console.log(e.target.name)
        console.log(this.state.categories)
    }
    
    handleSubmit = (e, newCategory) => {
        console.log(this.state)
        e.preventDefault();
        const currentDate = Date.now();
        newCategory = { name: this.state.categories[this.state.categories.length-1].name,  activities: [], dateCreated: currentDate, id: currentDate }
        console.log(newCategory);
        this.setState({categories: [...this.state.categories, newCategory]});
        console.log("updated state", this.state)
    }
    render() {
        return (

        <div>
            <h1>Your Categories</h1>
          {this.state.categories.map(category => <h3 category={category} > {category.name} </h3>)}
            <form onSubmit={this.handleSubmit}>
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
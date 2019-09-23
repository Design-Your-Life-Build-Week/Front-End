import React from 'react';

class Categories extends React.Component {
    state = {
        categories: [
            {name: fitness,
            activities: [],
            dateCreated: '',
            }
        ]
    }
    handleChange = (e) => {
        this.setState({ ...categories, [e.target.name]: e.target.value});
    }
    render() {
        return (

        <div>
          {categories.map(category => <h1 category={category} > {category.name} </h1>)}
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
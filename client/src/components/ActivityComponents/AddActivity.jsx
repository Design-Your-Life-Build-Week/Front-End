import React from 'react';
import styled from 'styled-components';

const AddActivityDiv = styled.div `

`

const AddActivity = props => {
  return (
    <>
      {props.activities.map(activity => (
        <AddActivityDiv key={activity.id}>
          <h2>{activity.activity}</h2>
          <p>{activity.description}</p>
          <p>{activity.rating}</p>
          
        </AddActivityDiv>
      ))}
    </>
  );
};

export default AddActivity;

































// import styled from 'styled-components';
// import React, {useState} from "react';"
// import ReactDOM from "react-dom";


// const CreateActivityBox = styled.div `

// `
// const H2 = styled.h2 `

// `
// const Button = styled.button `

// `

// const CreateActivity = props => {
//     const [activities, setActivities] = useState([
//         {
//             activity: '', 
//             description: '', 
//             rating: ''
//         }
//         ]);

//     const handleSubmit = event => {
//         event.preventDefault();
//     }


   
   
   
   
   
//     return (
//         <CreateActivityBox>
//             <H2>Add an Activity</H2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Add your new activity here" name="activity" onChange={changeHandler}/>
//             </form>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Describe your new activity" name="description" onChange={changeHandler}/>
//             </form>
//             <label>Rate your new activity ona scale of 1-5, 5 being best</label>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text"  name="rating" onChange={changeHandler}/>
//                 </form>

//             <form onSubmit={handleSubmit}>
//                 <Button type="submit">Add</Button>
//             </form> 
//         </CreateActivityBox>
//     )
// }  
// const newActivity = document.createElement('div');
// visual.appendChild(newActivity);

    


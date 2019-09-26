import React, {useContext} from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground }
    from '../Styling';
import { ActivitiesContext } from '../../contexts/ActivitiesContext';
import { axiosLoginAuth } from '../../utils/axiosLoginAuth';

const ActivityCards = styled.div `
    display:flex;
    flex-wrap:wrap;
`

// Activity Card Wrapper
const CardWrapper = styled.div`
    display: flex;
    border-radius: 6px;
    margin: 20px;
    width: 400px;
    font-family: ${MainFontFamily};
    background-image: ${CardBackground};
}`;

// Title and Rating Wrapper
const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 1.2rem;
`;

// Edit and Delete Button Styling
const CardButton = styled.button`
    background-image: ${ButtonBackground};
    color: ${ButtonFont};
    font-size: 1.0rem;
    text-align: center;
    border: none;
    padding: 5px;
    border-radius: 8px;
    margin: 5px;
    width: 100px;

    :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
    }
`;

/*========SUPPORTING FUNCTIONS========*/
// function that allows user to edit card
function editCard() {
  //TO DO
  console.log("Edit Card");
}

// function that deletes the card
function deleteCard(id) {
  axiosLoginAuth()
  .delete(`https://build-your-life.herokuapp.com/api/activities/${id}`)
  .then(res =>window.location.reload())
  .catch(err => console.log(err))

}


/*========DEFAULT FUNCTION========*/

const AddActivity = props => {
    const {activities } = useContext(ActivitiesContext);

    console.log(activities)
  return (
    <>
    <ActivityCards>
                {activities.map(activity => (
            <CardWrapper>

                        <TitleBox>
                            <h2>{activity.activity_name}</h2>
                            <p>{activity.reflections}</p>
                            <Rating activityRating = {activity.rating}/>
                        </TitleBox>
                        <TitleBox>
                            <p>{activity.text}</p>
                            <CardButton onClick={editCard}>Edit</CardButton>
                            <CardButton onClick={() => deleteCard(activity.id)}>Delete</CardButton>
                        </TitleBox> 

            </CardWrapper>
            ))}
    
      </ActivityCards>
          
          
          
          
          
           {/* <h2>{activity.activity}</h2>
          // <p>{activity.description}</p>
          // <Rating rating={activity.rating}/> */}
        
      
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

    


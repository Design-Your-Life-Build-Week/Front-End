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
justify-content:space-around


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
// function editCard() {
//   //TO DO
//   console.log("Edit Card");
// }

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
            <CardWrapper key={activity.id}>

                        <TitleBox>
                            <h2>{activity.activity_name}</h2>
                            <p>{activity.reflections}</p>
                            <Rating activityRating = {activity.rating}/>
                        </TitleBox>
                        <TitleBox>
                            <p>{activity.text}</p>
                            {/* <CardButton onClick={editCard}>Edit</CardButton> */}
                            <CardButton onClick={() => deleteCard(activity.id)}>Delete</CardButton>
                        </TitleBox> 

            </CardWrapper>
            ))}
    
      </ActivityCards>
      
    </>
  );




};




export default AddActivity;


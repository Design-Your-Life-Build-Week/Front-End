import React, { useState, useEffect } from "react";
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground }
    from '../Styling';
import styled from 'styled-components';
import {axiosLoginAuth} from '../../utils/axiosLoginAuth';
import Rating from '../Rating';
import Categories from "../Categories";


const ActivityCards = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly
;
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
  function deleteCard() {
    //TO DO
    console.log("Delete Card");
  }
  

const SavedActivities = (props) => {
    const [savedActivity, setSavedActivity] = 
    useState([]);

    const addNewActivity = activity => {
        const newActivity = {
            id: Date.now(),
            activity: savedActivity.activity,
            description: savedActivity.description,
            rating: savedActivity.rating
        };
        setSavedActivity([...savedActivity, newActivity]);
    };

    useEffect (() => {

        axiosLoginAuth()
        .get('https://build-your-life.herokuapp.com/api/activities')
        .then(response => {
           console.log(response)
            const savedActivity = response.data;
      
            setSavedActivity(savedActivity)
            console.log(savedActivity[0]);
        })
        .catch(error => {
            console.log('oof!!!', error)
        });
    },[]);

    
        return (
            <ActivityCards>

            {savedActivity && savedActivity.map((data, index) => (
                <CardWrapper key={index}>
                <TitleBox>
                    <h2>{data.activity_name}</h2>
                    <p>{data.reflections}</p>
                    <Rating rating={data.starRating.toString()}/>
                    
                </TitleBox>
                <TitleBox>
                    <p>{props.text}</p>
                    <CardButton onClick={editCard}>Edit</CardButton>
                    <CardButton onClick={deleteCard}>Delete</CardButton>
                </TitleBox>
            </CardWrapper>
          
     ))}   
     </ActivityCards>

        )}

export default SavedActivities
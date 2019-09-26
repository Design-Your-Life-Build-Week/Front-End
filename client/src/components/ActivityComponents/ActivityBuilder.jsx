import React, { useState, useEffect, useContext } from "react";
import ActivityForm from './ActivityForm';
import AddActivity from './AddActivity';
// import SavedActivities from './SavedActivities';
import styled from 'styled-components';
import { MainFontFamily, ButtonBackground, ButtonFont, LoginColor, ButtonHover, ButtonHoverFont } from '../Styling'
import axios from 'axios';
import { axiosLoginAuth } from "../../utils/axiosLoginAuth";
import { ActivitiesContext } from '../../contexts/ActivitiesContext';



const YourActivities = styled.div `
margin-top:-.25%;
font-family: ${MainFontFamily};

`
const H1 = styled.h1 `

`
const CreateNew = styled.button `
margin:.5% 0 2%;
font-size:1.25rem;
border-radius:5px;
background-image: ${ButtonBackground};
color: ${ButtonFont};
    :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
    }
    
`

const PopDownDiv = styled.div `
padding-bottom: 2%
width:50%;
margin: 0 25%;
background:${LoginColor};
border-radius:5px;
color:ghostwhite;
`
const ActivityBuilder = (props) => {
    const context = useContext(ActivitiesContext)
    console.log("contextCheck", context)
    const [ activities, setActivities ] = useState(context);
    console.log("contextCheck", activities)

    const addNewActivity = activity => {
        const newActivity = {
            activity_name: activity.activity,
            reflections: activity.description,
            starRating: activity.rating,
            categories_id: activity.categories_id
        };
        axiosLoginAuth()
        .post("https://build-your-life.herokuapp.com/api/activities", newActivity)
        .then(res => {
            console.log("add RES", res)
            setActivities([...activities, res]);
            props.getData()
        })
        
        .catch(err => console.log(err))
    
        
    };

    const [showText, setShowText] = useState(false);

   
return (
    <YourActivities>
        
        <H1>{props.activities.activity_name}</H1>
        <CreateNew onClick={() => setShowText(!showText)}>Create New</CreateNew>  
        {showText && <PopDownDiv>
            <ActivityForm addNewActivity={addNewActivity}/>
        </PopDownDiv>}  
        {/* <SavedActivities/> */}
        <AddActivity activities={props.activities}/>
      
    </YourActivities>
);




}

export default ActivityBuilder
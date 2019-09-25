import React, { useState } from "react";
import ActivityForm from './ActivityForm';
import AddActivity from './AddActivity';
import styled from 'styled-components';
import Rating from '../Rating';
import { BuilderBackground } from '../Styling'
import { MainFontFamily, ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont } from '../Styling'


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
`
const ActivityBuilder = () => {
    const [activities, setActivities] = useState([]);

    const addNewActivity = activity => {
        const newActivity = {
            id: Date.now(),
            activity: activity.activity,
            description: activity.description,
            rating: activity.rating
        };
        setActivities([...activities, newActivity]);
    };


    const [showText, setShowText] = useState(false);

return (
    <YourActivities>
        
        <H1>Your Activities</H1>
        <CreateNew onClick={() => setShowText(!showText)}>Create New</CreateNew>  
        {showText && <PopDownDiv>
            <ActivityForm addNewActivity={addNewActivity}/>
           {/* <Rating/> */}
        </PopDownDiv>}  
        <AddActivity activities={activities}/>
    </YourActivities>
);




}

export default ActivityBuilder
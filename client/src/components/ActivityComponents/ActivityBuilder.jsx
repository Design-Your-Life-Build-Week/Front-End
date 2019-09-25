import React, { useState } from "react";
import ActivityForm from './ActivityForm';
import AddActivity from './AddActivity';
import styled from 'styled-components';


const YourActivities = styled.div `

`
const H1 = styled.h1 `

`
const Expand = styled.button `

`
const HideActivities = styled.div `
display:none;
`

const ShowActivities = styled.div `
display:flex;
height:500px;
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
        <Expand onClick={() => setShowText(!showText)}>Expand</Expand>  
        {showText && <div>
            <ActivityForm addNewActivity={addNewActivity}/>
        </div>}  
        <AddActivity activities={activities}/>
    </YourActivities>
);




}

export default ActivityBuilder
import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

/*
* PAGE WITH LIST OF ACTIVITIES AND COMPONENT TO ADD MORE
*/

//Styled Component for Activity Page
const ActivityWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ActivityList = props => {
    // get an array of activity objects - through props or API
    /*========PLACEHOLDER ARRAY========*/
    const activities = [
        {id: 1, title: "Run", text: "My goal is to run 5 miles every week", rating: 3}, 
        {id: 2, title: "Eat Healthy", text: "My goal is to eat no more than 2,000 calories on weekdays", rating: 2}
    ]

    /*========FUNCTION TO EDIT ACTIVITY========*/
    function editActivity(id, title, text, rating) {
        // TO DO
    }

    /*========FUNCTION TO DELETE ACTIVITY========*/
    function deleteActivity(id) {
        // TO DO
    }

    return (
        <ActivityWrapper>
        {/*========RETRUN ACTIVITYADDER COMPONENT========*/}
        {/*========MAP THROUGH ARRAY OF CARD OBJECTS========*/}
        {activities.map( activity => (
            <ActivityCard key={activity.id}
                title={activity.title}
                text={activity.text}
                rating={activity.rating}
                edit={editActivity}
                delete={deleteActivity}
            />
        ))}
        </ActivityWrapper>
    )
}

export default ActivityList;
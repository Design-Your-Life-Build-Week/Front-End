import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {axiosLoginAuth} from '../../utils/axiosLoginAuth';

import AddActivity from '../ActivityComponents/AddActivity';
import ActivityBuilder from '../ActivityComponents/ActivityBuilder';
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground } 
    from '../Styling';

/*
* RETURNS A CARD OF EACH ACTIVITY
*/

/*========STYLING========*/
// Category Card Wrapper
const MoveCard = styled.div`
  display:inline-block;
  
  
`
const H1 = styled.h1`
    color:pink;

`

const CardWrapper = styled.div`
    display: flex;
    border-radius: 6px;
    margin: 20px;
    width: 350px;
    font-family: ${MainFontFamily};
    background-image: ${CardBackground};
    
    
}`;

// Title and Rating Wrapper
const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 1rem;
    color:purple;
    
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

//Box for Buttons
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    heighr: 50px;
`;

/*========DEFAULT FUNCTION========*/

const Work = props => {
    const [activities, setActivities] = useState([]);
    
     const getData = () => {
        axiosLoginAuth()
        .get("https://build-your-life.herokuapp.com/api/activities")
        .then(res => {
            setActivities(res.data.filter((i)=> {
                if (i.categories_id === 2) {
                    console.log("filteredstuff", i)
                    return (i)
                }
            }))
         
            })
            .catch(err => console.log(err))
            
     }
        useEffect(() => {
            axiosLoginAuth()
            .get("https://build-your-life.herokuapp.com/api/activities")
            .then(res => {
               setActivities(res.data)
                })
                .catch(err => console.log(err))
        }, [])

    console.log("props.activities", props.activities)
   
    return (
        <ActivitiesContext.Provider value={{activities}}>
            <MoveCard>
                <h2>Work</h2>
                <CardWrapper>
                    <TitleBox>
                        <ActivityBuilder activities={activities}/>
                        {activities.map((activities => <AddActivity key={activities.activity_name} activities={activities} getData={getData}  /> ))}
                    </TitleBox>
                </CardWrapper>
            </MoveCard> 
        </ActivitiesContext.Provider>
    )
}

export default Work;
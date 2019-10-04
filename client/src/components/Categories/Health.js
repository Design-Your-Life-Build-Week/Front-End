import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {axiosLoginAuth} from '../../utils/axiosLoginAuth';

import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, LoginColor } 
    from '../Styling';
import AddActivity from '../ActivityComponents/AddActivity';
import ActivityBuilder from '../ActivityComponents/ActivityBuilder';
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import ActivityForm from "../ActivityComponents/ActivityForm";

/*
* RETURNS A CARD OF EACH ACTIVITY
*/

/*========STYLING========*/
// Category Card Wrapper
const CardWrapper = styled.div`
    display: flex;
    border-radius: 6px;
    margin: 20px;
    width: 350px;
    font-family: ${MainFontFamily};
    
}`;

// Title and Rating Wrapper
const TitleBox = styled.div`
  display:flex;
    width: 100%;
    
    align-items: center;
    padding: 10px;
    font-size: 1rem;
    color:purple;
    
`;

const CreateNew = styled.button `

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
padding: 2%
width:40%;
margin-left:28%;
margin-top:2%;
background:${LoginColor};
border-radius:5px;
color:ghostwhite;
`




/*========DEFAULT FUNCTION========*/

const Health = props => {
    const [activities, setActivities] = useState([]);
    
    const getData = () => {
    axiosLoginAuth()
    .get("https://build-your-life.herokuapp.com/api/activities")
    .then(res => {
        setActivities(res.data.filter((i)=> {
            if (i.categories_id === 3) {
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
        <ActivitiesContext.Provider value={{activities, getData }}>
            <div>
                <h2>Physical and Health</h2>
                <CreateNew onClick={() => setShowText(!showText)}>Create New</CreateNew>  
        {showText && <PopDownDiv>
            <ActivityForm addNewActivity={addNewActivity}/>
        </PopDownDiv>}  
                <CardWrapper>
                    <TitleBox>
                        
                            <ActivityBuilder activities={activities}/>
                        <div>
                            <AddActivity />
                        </div>
                    </TitleBox>
                </CardWrapper>
            </div> 
        </ActivitiesContext.Provider>
    )
}

export default Health;
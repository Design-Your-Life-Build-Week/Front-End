import React, { useState, useContext } from "react";
import styled from 'styled-components';
import { MainFontFamily } from '../Styling'
import { ActivitiesContext } from '../../contexts/ActivitiesContext';

const YourActivities = styled.div `
margin-top:-.25%;
font-family: ${MainFontFamily};

`
const H1 = styled.h1 `

`

const ActivityBuilder = (props) => {
    const context = useContext(ActivitiesContext)
    console.log("contextCheck", context)
    const [ activities ] = useState(context);
    console.log("contextCheck", activities)
   
return (
    <YourActivities>
        <H1>{props.activities.activity_name}</H1>
    </YourActivities>
);
}

export default ActivityBuilder
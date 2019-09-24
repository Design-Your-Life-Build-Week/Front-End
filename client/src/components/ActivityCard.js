import React from 'react';
import styled from 'styled-components';

import Rating from './Rating';
import { ButtonBackground, ButtonFont, ButtonHover, 
    ButtonHoverFont, MainFontFamily, CardBackground } 
    from './Styling';

/*
* RETURNS A CARD OF EACH ACTIVITY
*/

/*========STYLING========*/
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


/*========DEFAULT FUNCTION========*/

const ActivityCard = props => {
    return (
        <CardWrapper>
            <TitleBox>
                <h2>{props.title}</h2>
                <Rating rating={props.rating}/>
            </TitleBox>
            <TitleBox>
                <p>{props.text}</p>
                <CardButton onClick={editCard}>Edit</CardButton>
                <CardButton onClick={deleteCard}>Delete</CardButton>
            </TitleBox>
        </CardWrapper>
    )
}

export default ActivityCard;
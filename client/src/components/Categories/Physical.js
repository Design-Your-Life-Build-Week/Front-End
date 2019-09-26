import React from 'react';
import styled from 'styled-components';


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

const Physical = props => {
    console.log(props)
    return (
        <MoveCard>
        <CardWrapper>
            <TitleBox>
                <h2>Physical</h2>
            </TitleBox>
            
        </CardWrapper>
        </MoveCard>
    )
}

export default Physical;
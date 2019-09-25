import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import FilledStar from '../images/star-filled.png';
import EmptyStar from '../images/star-outline.png';

/*
* COMPONENT THAT RETURNS RATING IN FORM OF STARS
*/

//Star Wrapper
const StarWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

//Individual Star Styling
const Star = styled.img`
    height: 20px; 
    margin: 0 2px
`;

const Rating = props => {
    // Rating state
    const [starArr, setStarArr] = useState([]);
    const [currentRating, setCurrentRating] = useState(props.rating);

    // Create an Array of Star Images to Render
    // push 1 into array for each star in given rating
    function newRating(num) {
        let newArr = []
        for (let i = 0; i < 5; i++) {
            if (i < num) {
                newArr.push(FilledStar);
            }
            else if (i < 5) {
                newArr.push(EmptyStar);
            }
        }
        setStarArr(newArr);
    }
    useEffect(() => {
        newRating(currentRating);
    }, [currentRating]);

    return (
        <StarWrapper>
            {starArr.map((num, index) => (
                <Star key={index} onClick={() => setCurrentRating(index + 1)}src={num} alt="filled star"/>
            ))
            }
        </StarWrapper>
    )
}

export default Rating;
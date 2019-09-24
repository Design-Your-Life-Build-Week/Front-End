import React from 'react';
import styled from 'styled-components';

// Activity Card Wrapper
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid black;
    margin: 20px;
}`;

const ActivityCard = props => {
    return (
        <CardWrapper>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </CardWrapper>
    )
}

export default ActivityCard;
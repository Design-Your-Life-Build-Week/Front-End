import React, { useState } from "react";
import styled from 'styled-components';

const ActivityFormDiv = styled.div `

`

const ActivityForm = props => {
  const [activity, setActivity] = useState({
    activity: "",
    description: "",
    rating: ""
  });
  const handleChanges = event => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
    console.log(activity);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewActivity(activity);
    setActivity({ activity: "", description: "", rating: "" });
  };

  return (
    <ActivityFormDiv>
        <form onSubmit={submitForm}>
            <label htmlFor="title">Activity</label>
            <input
                id="activity"
                type="text"
                name="activity"
                onChange={handleChanges}
                value={activity.activity}
            />
            <label htmlFor="note">Description</label>
            <textarea
                id="description"
                name="description"
                onChange={handleChanges}
                value={activity.description}
            />
            <label htmlFor="title">Rating 1-5, 5 being best</label>
            <input
                id="rating"
                type="text"
                name="rating"
                onChange={handleChanges}
                value={activity.rating}
            />
            <button type="submit">Add Activity</button>
        </form>
    </ActivityFormDiv>    
  );
};

export default ActivityForm;

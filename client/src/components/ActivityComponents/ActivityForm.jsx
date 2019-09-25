import React, { useState } from "react";
import styled from 'styled-components';
import { MainFontFamily, ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont } from '../Styling'
import axios from 'axios';


const ActivityFormDiv = styled.div `
font-family: ${MainFontFamily};
font-size:62.5%;
`
const LabelOverInput = styled.div `
display:flex;
flex-direction:column;
width:100%;
align-items:center;

`

const ActivityDiv = styled.div `
display:flex;
`
const Input = styled.input `
width:40%
font-size:1.5rem;
margin: 5% 0;
`

const Label = styled.label `
font-size:1.5rem;
margin-top:10%;
`

const Textarea = styled.textarea `
width:40%;
margin-bottom: 4%;
font-size:1.5rem;
margin: 5% 0;

`
const Button = styled.button `
font-size:1.25rem;
border-radius:5px;
margin-top:2%;
background-image: ${ButtonBackground};
color: ${ButtonFont};
    :hover{
        background-image: ${ButtonHover};
        color: ${ButtonHoverFont};
    }
    
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

  //////////// axios stuff
  return (
    <ActivityFormDiv>
        <form onSubmit={submitForm}>
            <ActivityDiv>
              <LabelOverInput>
                <Label htmlFor="title">Activity</Label>
                <Input
                    id="activity"
                    type="text"
                    name="activity"
                    onChange={handleChanges}
                    value={activity.activity}
                />
                </LabelOverInput>
                <LabelOverInput>
                  <Label htmlFor="note">Description</Label>
                  <Textarea
                      id="description"
                      name="description"
                      onChange={handleChanges}
                      value={activity.description}
                  />
                </LabelOverInput>
                <LabelOverInput>
                  <Label htmlFor="title">Rating 1-5, <div>5 being best</div></Label>
                  <Input
                      id="rating"
                      type="text"
                      name="rating"
                      onChange={handleChanges}
                      value={activity.rating}
                  />
                </LabelOverInput>
              </ActivityDiv>
              <Button type="submit">Add Activity</Button>

        </form>
    </ActivityFormDiv>    
  );
};

export default ActivityForm;

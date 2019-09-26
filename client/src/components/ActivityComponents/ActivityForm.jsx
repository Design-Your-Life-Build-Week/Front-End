import React, { useState } from "react";
import styled from 'styled-components';
import { MainFontFamily, ButtonBackground, ButtonFont, ButtonHover, ButtonHoverFont } from '../Styling'


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
    rating: "",
    categories_id: ""
  });
  const handleChanges = event => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
    console.log("name", event.target.name)
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewActivity(activity);
    setActivity({ activity: "", description: "", rating: "", categories_id: "" });
  };

  
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


                  <select name="categories_id" value={activity.categories_id} onChange={handleChanges}>
                  <option>Select</option>

                    <option value="1">Physical</option>
                    <option value="2">Personal</option>
                    <option value="3">Work</option>
                    <option value="4">Family</option>
                    <option value="5">Financial</option>
                    <option value="6">Mind</option>
                    <option value="7">Spiritual</option>
                  </select>
             
         
              </ActivityDiv>
              <Button type="submit">Add Activity</Button>

        </form>
    </ActivityFormDiv>    
  );


;
}
export default ActivityForm

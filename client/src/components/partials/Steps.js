import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {StepContext} from "../../context/StepContext";

export default function Steps() {
  return (
    <StepContext.Consumer>
      {({
          step,
          handleChange
        }) => (
        <FormControl component="fieldset">
          <RadioGroup aria-label="assistant" name="step" value={step} onChange={handleChange}>
            <FormControlLabel value="name" control={<Radio/>} label="Name your assistant"/>
            <FormControlLabel value="style" control={<Radio/>} label="Select styles"/>
            <FormControlLabel value="account" control={<Radio/>} label="Create your account"/>
          </RadioGroup>
        </FormControl>
      )}
    </StepContext.Consumer>
  )
}

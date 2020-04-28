import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Avatar from "@material-ui/core/Avatar";
import HooryIconGrey from "../../../assets/hoory icon grey.svg";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import '../../../assets/scss/AssistantName.scss';
import {StepContext} from "../../pages/Home";

const useStyles = makeStyles((theme) => (
  {
    root: {
      width: '100%',
    }
  }));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function AssistantName() {
  const classes = useStyles();
  return (
    <StepContext.Consumer>
      {({
          name,
          handleChange,
          changeStep
        }) => (
        <div id='assistant-name' className={classes.root}>
          <Avatar src={HooryIconGrey}/>
          <h3>hoory</h3>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
              Name your assistant
            </Box>
          </Typography>
          <ValidatorForm id='hooryNameForm' noValidate autoComplete="off" onSubmit={() => {
            changeStep('style');
          }}>
            <Typography component="div">
              <TextValidator
                required
                name='name'
                id="name"
                label="Name"
                value={name}
                validators={["required"]}
                errorMessages={["Name is required"]}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
              />
            </Typography>
            <Typography component="div">
              <ThemeProvider theme={theme}>
                <Button
                  form="hooryNameForm" type='submit'
                  variant="contained" color="primary">
                  Start
                </Button>
              </ThemeProvider>
            </Typography>
          </ValidatorForm>
        </div>
      )}
    </StepContext.Consumer>
  );
}


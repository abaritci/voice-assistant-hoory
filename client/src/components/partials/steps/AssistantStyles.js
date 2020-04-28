import React from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import {StepContext} from "../../../context/StepContext";
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AssistantCircle from "./AssistantCircle";
import AssistantAvatar from "./AssistantAvatar";
import Grid from "@material-ui/core/Grid";
import '../../../assets/scss/AssistantStyles.scss';

const useStyles = makeStyles((theme) => (
  {
    root: {
      width: '100%',
    },
  }));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function AssistantStyles() {
  const classes = useStyles();
  return (
    <StepContext.Consumer>
      {({
          name,
          sex,
          color,
          handleChange,
          changeStep
        }) => (
        <div id='assistant-styles' className={classes.root}>
          <Grid container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                  Select {name}'s icon
                </Box>
              </Typography>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <RadioGroup row aria-label="sex" name="sex" value={sex} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio/>}
                                  label={<AssistantAvatar isSelected={sex === 'female'} sex={'female'}
                                                          color={color}/>}/>
                <FormControlLabel value="male" control={<Radio/>}
                                  label={<AssistantAvatar isSelected={sex === 'male'} sex={'male'} color={color}/>}/>
              </RadioGroup>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                  Select color scheme
                </Box>
              </Typography>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <RadioGroup row aria-label="color" name="color" value={color} onChange={handleChange}>
                <FormControlLabel value="1" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "1"} activeColor={'#6426FB'}
                                                          backgroundColor={'#6426FB'} gradientColor={'#673AFB'}/>}/>
                <FormControlLabel value="2" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "2"} activeColor={'#6BB331'}
                                                          backgroundColor={'#6BB331'} gradientColor={'#8CCD40'}/>}/>
                <FormControlLabel value="3" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "3"} activeColor={'#F8A43F'}
                                                          backgroundColor={'#F8A43F'} gradientColor={'#F89939'}/>}/>
                <FormControlLabel value="4" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "4"} activeColor={'#C6273A'}
                                                          backgroundColor={'#C6273A'} gradientColor={'#C22337'}/>}/>
                <FormControlLabel value="5" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "5"} activeColor={'#834BC4'}
                                                          backgroundColor={'#834BC4'} gradientColor={'#9D58CB'}/>}/>
                <FormControlLabel value="6" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "6"} activeColor={'#AA39A7'}
                                                          backgroundColor={'#AA39A7'} gradientColor={'#C64A88'}/>}/>
                <FormControlLabel value="7" control={<Radio/>}
                                  label={<AssistantCircle isActive={color === "7"} activeColor={'#3095E7'}
                                                          backgroundColor={'#3095E7'} gradientColor={'#4AAFF1'}/>}/>
              </RadioGroup>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Typography component="div">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" onClick={() => {
                    changeStep('account');
                  }}>
                    Next
                  </Button>
                </ThemeProvider>
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </StepContext.Consumer>
  
  );
}


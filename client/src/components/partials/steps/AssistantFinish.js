import React from 'react';
import {Link} from 'react-router-dom';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import {StepContext} from "../../pages/Home";
import AssistantAvatar from "./AssistantAvatar";
import Grid from "@material-ui/core/Grid";
import {Emojione} from 'react-emoji-render';
import '../../../assets/scss/AssistantFinish.scss';

const useStyles = makeStyles((theme) => (
  {
    root: {
      width: '100%',
    },
    link: {
      color : '#ffffff',
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color : '#ffffff',
      }
    }
  }));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    subtitle1: {
      fontSize: 10,
      margin: 6
    }
  },
});
export default function AssistantFinish() {
  const classes = useStyles();
  return (
    <StepContext.Consumer>
      {({
          name,
          sex,
          color
        }) => (
        <div id='assistant-finish' className={classes.root}>
          <Grid container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <AssistantAvatar isSelected={false} sex={sex} color={color}/>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Typography component="div">
                <Box fontWeight="fontWeightBold" m={1}>
                  Fantastico <Emojione className='emoji' text={"🎉🎉🎉🎉🎉:tada:"}/>🎉
                </Box>
              </Typography>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle1">
                  You have successfully setup the widget on your website!
                  Proced to Admin Dashboard to start training <span style={{fontWeight: 600}}>{name}</span>
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Typography component="div">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary">
                    <Link to="/login" className={classes.link}>
                      Go to Admin Dashboard
                    </Link>
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


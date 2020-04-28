import React from 'react';
import {Link} from 'react-router-dom';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {green} from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import {StepContext} from "../../../context/StepContext";
import GoogleIcon from '../icons/GoogleIcon';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import '../../../assets/scss/AssistantAccount.scss';
import classnames from "classnames";

const useStyles = makeStyles((theme) => (
  {
    root: {
      width: '100%',
      maxWidth: 300
    },
    section: {
      margin: 'auto',
    },
    firstName: {
      width: '50%'
    },
    lastName: {
      width: '50%'
    },
    email: {
      width: '100%'
    },
    password: {
      width: '100%'
    },
    signUpGoogle: {
      width: '100%'
    },
    divider: {
      width: '45%',
      margin: 3
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
export default function AssistantAccount() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <StepContext.Consumer>
      {({
          firstName,
          lastName,
          email,
          password,
          password_confirm,
          handleChange,
          registerUser,
          errors
        }) => (
        <div id='assistant-account' className={classes.root}>
          <div className={classes.section}>
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
                    Create your account
                  </Box>
                </Typography>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <FormControl className={clsx(classes.margin, classes.signUpGoogle)} variant="outlined">
                  <Button
                    variant="outlined"
                    startIcon={<GoogleIcon/>}
                  >
                    Sign up with Google
                  </Button>
                </FormControl>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Divider className={classes.divider}/> or <Divider className={classes.divider}/>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <FormControl className={clsx(classes.margin, classes.firstName)} variant="outlined">
                  <InputLabel htmlFor="first-name">First Name</InputLabel>
                  <OutlinedInput
                    id="first-name"
                    type={'text'}
                    value={firstName}
                    name={'firstName'}
                    onChange={handleChange}
                    className={classnames({
                      'is-invalid': errors.firstName
                    })}
                    labelWidth={70}
                    inputProps={{
                      autoComplete: 'firstName'
                    }}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>)}
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.lastName)} variant="outlined">
                  <InputLabel htmlFor="last-name">Last Name</InputLabel>
                  <OutlinedInput
                    id="last-name"
                    type={'text'}
                    value={lastName}
                    name={'lastName'}
                    onChange={handleChange}
                    className={classnames({
                      'is-invalid': errors.lastName
                    })}
                    labelWidth={70}
                    inputProps={{
                      autoComplete: 'lastName'
                    }}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>)}
                </FormControl>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <FormControl className={clsx(classes.margin, classes.email)} variant="outlined">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    type={'text'}
                    value={email}
                    name={'email'}
                    onChange={handleChange}
                    className={classnames({
                      'is-invalid': errors.email
                    })}
                    labelWidth={70}
                    inputProps={{
                      autoComplete: 'email'
                    }}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>)}
                </FormControl>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <FormControl className={clsx(classes.margin, classes.password)} variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    name={'password'}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    className={classnames({
                      'is-invalid': errors.password
                    })}
                    labelWidth={70}
                    inputProps={{
                      autoComplete: 'password'
                    }}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>)}
                </FormControl>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <FormControl className={clsx(classes.margin, classes.password)} variant="outlined">
                  <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="password-confirm"
                    type={showPassword ? 'text' : 'password'}
                    value={password_confirm}
                    name={'password_confirm'}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    className={classnames({
                      'is-invalid': errors.password_confirm
                    })}
                    labelWidth={70}
                    inputProps={{
                      autoComplete: 'password_confirm'
                    }}
                  />
                  {errors.password_confirm && (
                    <div className="invalid-feedback">{errors.password_confirm}</div>)}
                </FormControl>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">By registering an account with us you agre to the PP and
                    T&C</Typography>
                </ThemeProvider>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Typography component="div">
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" onClick={() => {
                      registerUser();
                    }}>
                      Create account
                    </Button>
                  </ThemeProvider>
                </Typography>
              </Grid>
              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle1">Have an account?
                  </Typography>
                  <Typography variant="subtitle1">
                    <Link to="/login">
                      Sign In
                    </Link>
                  </Typography>
                </ThemeProvider>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </StepContext.Consumer>
  
  );
}




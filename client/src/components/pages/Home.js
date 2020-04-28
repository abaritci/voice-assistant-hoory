import React, {Component} from 'react';
import {compose} from "redux";
import Sidebar from "../partials/Sidebar";
import StepContent from "../partials/StepContent";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authentication";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';

export const StepContext = React.createContext(null);

const styles = (theme) => (
  {});

class Home extends Component {
  state = {
    step: 'name',
    name: '',
    sex: 'female',
    color: '1',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirm: '',
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  changeStep = (step) => {
    this.setState({step});
  }
  registerUser = () => {
    const user = {
      name: this.state.name,
      sex: this.state.sex,
      color: this.state.color,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    } = this.state
    this.props.registerUser(user);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.user !== this.props.user) {
      this.changeStep('finish');
    }
  }
  
  render() {
    const {
      step,
      name,
      sex,
      color,
      firstName,
      lastName,
      email,
      password,
      password_confirm
    } = this.state;
    const {errors} = this.props;
    return (
      <StepContext.Provider
        value={
          {
            step,
            name,
            sex,
            color,
            firstName,
            lastName,
            email,
            password,
            password_confirm,
            handleChange: this.handleChange,
            changeStep: this.changeStep,
            registerUser: this.registerUser,
            errors
          }
        }
      >
        <div className="wrapper">
          <Sidebar/>
          <StepContent step={step}/>
        </div>
      </StepContext.Provider>
    );
  }
}

Home.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  {
    auth: state.authReducer,
    errors: state.errorReducer,
    user: state.userReducer
  });

export default compose(
  withStyles(styles, {
    name: 'Home',
  }),
  connect(mapStateToProps, {registerUser}
  ),
)(Home);

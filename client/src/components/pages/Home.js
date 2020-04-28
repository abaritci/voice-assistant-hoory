import React, {Component} from 'react';
import {compose} from "redux";
import Sidebar from "../partials/Sidebar";
import StepContent from "../partials/StepContent";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authentication";
import {getUser} from "../../actions/user/get_user.action";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import {StepContext} from "../../context/StepContext";

const styles = (theme) => (
  {});

class Home extends Component {
  state = {
    _id: null,
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
  
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getUser(this.props.match.params.id);
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.user !== this.props.user) {
      const {_id, name, sex, color, firstName, lastName, email, password} = this.props.user;
      this.setState({_id, name, sex, color, firstName, lastName, email, password, password_confirm: ''})
      if (this.state.step === 'account') {
        this.changeStep('finish')
      }
    }
  }
  
  render() {
    const {
      _id,
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
            _id,
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
    user: state.userReducer.user
  });

export default compose(
  withStyles(styles, {
    name: 'Home',
  }),
  connect(mapStateToProps, {registerUser, getUser}
  ),
)(Home);

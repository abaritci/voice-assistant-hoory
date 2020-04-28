import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Navbar from "../partials/Navbar";
import {getUsers} from "../../actions/user/get_users.action";
import {deleteUser} from "../../actions/user/delete_users.action";
import UsersList from "../partials/UsersList";


const styles = (theme) => (
  {});

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  
  render() {
    const {users} = this.props;
    return (
      <div id='dashboard'>
        <Navbar/>
        <UsersList data={users} deleteUser={(id) => this.props.deleteUser(id)}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  {
    auth: state.authReducer,
    errors: state.errorReducer,
    user: state.userReducer,
    users: state.userReducer.users,
  });

export default compose(
  withStyles(styles, {
    name: 'Dashboard',
  }),
  connect(mapStateToProps, {getUsers, deleteUser}
  ),
)(Dashboard);

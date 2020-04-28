import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Steps from "./Steps";
import HooryLogoWhite from "../../assets/hoory logo white.png";

class Sidebar extends Component {
  
  render() {
    const {isAuthenticated} = this.props.auth;
    return (
      <div>
        {!isAuthenticated && <nav id="sidebar">
          <div className="sidebar-header">
            <img alt={'Hoory Logo White'} src={HooryLogoWhite}/>
          </div>
          <Steps/>
        </nav>}
      </div>
    )
  };
}

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
  {
    auth: state.authReducer
  })

export default connect(mapStateToProps)(withRouter(Sidebar));

import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Header.css";

class Header extends Component {
  contentHandler = () => {
    
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <button className="btn btn-outline-light"><a href="/auth/google">Login With Google</a></button>
          </div>
        );
      default:
        return (
          <div>
            <button className="btn btn-outline-light"><a href="/api/logout">Logout</a></button>
          </div>
        );
    }
  };

  render() {
    return <div className={classes.Login}>{this.contentHandler()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth._id
  };
};

export default connect(mapStateToProps)(Header);

import React from "react";
import classes from './SideDrawerToggle.css';

const sideDrawerToggle = (props) => {
 
  return (
    <div className={classes.SideDrawerToggle} onClick={props.drawerToggleClicked}>
      <i className="medium material-icons">menu</i>
    </div>
  );
};

export default sideDrawerToggle;

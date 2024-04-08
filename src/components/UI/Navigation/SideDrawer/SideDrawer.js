import React from "react";
import classes from "./SideDrawer.css";
import SideDrawerItems from "../SideDrawerItems/SideDrawerItems";

const sideDrawer = props => {

  let combinedClasses = [classes.SideDrawer, classes.Open];
  if (props.open === false) {
    combinedClasses = [classes.SideDrawer, classes.Closed];
  }
  return (
    <div className={combinedClasses.join(" ")}>
        <div>
           <SideDrawerItems/>
        </div>
    </div>
  );
};

export default sideDrawer;

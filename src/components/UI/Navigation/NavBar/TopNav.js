import React from "react";
import classes from './TopNav.css';
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle";
import Header from "../../../../containers/Login/Header";


const topNav = (props) => (

    <header className={classes.TopNavBar}>
      <SideDrawerToggle drawerToggleClicked={props.drawerToggleClicked} />
    
      <Header/>
    
    </header>
  
);

export default topNav;

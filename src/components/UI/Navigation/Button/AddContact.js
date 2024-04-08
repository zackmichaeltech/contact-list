import React from "react";
import classes from "./AddContact.css";

const addContactButton = (props) => {

  let combinedClasses = [classes.addContactAction, classes.btnFloating, classes.btnLarge, classes.yellow, classes.white, classes.Overlay];
  let iconClasses = ['material-icons', classes.addIcon]  

  return (
    <div className="buttonContainer" onClick={props.addContactInputModalShow}>
      <div className={combinedClasses.join(" ")}>
        <i className={iconClasses.join(" ")}>add</i>
      </div>
    </div>
  );
};

export default addContactButton;

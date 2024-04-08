import React from "react";
import Avatar from "../UI/Avatar/Avatar";

import classes from "./ShowContact.css";

const showContact = props => {
    
  let combinedNameClasses = ["col-sm-8", "col-xs-8", classes.Name];
  let combinedAvatarClasses = ["col-sm-4", "col-xs-4", classes.Avatar];
  let combinedIconClasses = ["material-icons", classes.Icons];

  return (
    <div className="card">
     <div className="row">
        <Avatar className={combinedAvatarClasses.join(" ")} name={props.name} />
        <h4 className={combinedNameClasses.join(" ")}>
          {props.name.toUpperCase()} 
        </h4>
      </div>
      <div className={classes.Info}>
        <p className="title">
          <i className={combinedIconClasses.join(" ")}>email</i><strong>Email:</strong> {props.email}
        </p>
        <p>
          <i className={combinedIconClasses.join(" ")}>location_on</i><strong>Street
          Address: </strong>{props.address}
          <span className={classes.PostalCode}><strong>Postal Code: </strong>{props.postalCode}</span></p>
        <p>
          <i className={combinedIconClasses.join(" ")}>phone</i><strong>Contact Number: </strong>
          {props.phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default showContact;

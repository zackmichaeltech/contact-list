import React from "react";
import classes from "./ContactModal.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";


const contactModal = (props) => {
  let combinedButtonClasses = ["btn btn-warning", classes.Button];
  
  return (
    
    <Aux>
      <Backdrop show={props.show} closed={props.closed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <div className={classes.MobileButton}>
          <button className= {combinedButtonClasses.join(" ")} onClick={props.closed}>Back</button>
        </div>
      </div>
    </Aux>
  );
};


export default contactModal;

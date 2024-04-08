import React, { Component } from "react";
import classes from "./Input.css";

class Input extends Component {
  render() {
    let inputElement = null;

    switch (this.props.elementType) {
      case "input":
        inputElement = (
          <input
            className={classes.InputElement}
            {...this.props.elementAttr}
            value={this.props.value}
            onChange={this.props.changed}
          />
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
            className={classes.InputElement}
            {...this.props.elementAttr}
            value={this.props.value}
            onChange={this.props.changed}
          />
        );
        break;
      default:
        inputElement = (
          <input
            className={classes.InputElement}
            {...this.props.elementAttr}
            value={this.props.value}
            onChange={this.props.changed}
          />
        );
    }
    return <div className={classes.Input}>{inputElement}</div>;
  }
}

export default Input;

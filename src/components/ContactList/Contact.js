import React, { Component } from "react";
import classes from "./Contact.css";
import Avatar from "../UI/Avatar/Avatar";
import ContactControls from "../../containers/contacts/ContactControls";
import ContactModal from "../UI/Modal/ContactModal";
import ShowContact from "./ShowContact";

class Contact extends Component {
  state = {
    contactClicked: false
  };

  contactCardModal = () => {
    this.setState({ contactClicked: true });
  };

  contactModalClosedHandler = (e) => {
    e.stopPropagation()
      this.setState({contactClicked: false})
  }

  render() {
 
    let combinedClasses = [
      "col-md-3",
      "col-lg-3",
      "col-sm-4",
      classes.NameItem
    ];
    let EmailViewClasses = ["col-sm-3", classes.EmailView];
    let PhoneNumberViewClasses = ["col-sm-2", classes.PhoneNumberView];
    let mergedClasses = ["row", classes.ContactItem];
    let classesAvatar = ["col-sm-3", classes.Avatar];

    return (
      <div
        className={mergedClasses.join(" ")}
        onClick={() => {
          this.contactCardModal()

        }}
      >
        <ContactModal
          show={this.state.contactClicked}
          closed={this.contactModalClosedHandler}
        >
          <ShowContact
            name={this.props.name}
            email={this.props.email}
            phoneNumber={this.props.phoneNumber}
            address={this.props.address}
            postalCode={this.props.postalCode}
          />
        </ContactModal>

        <Avatar className={classesAvatar.join(" ")} name={this.props.name} />
        <div className={combinedClasses.join(" ")}>{this.props.name}</div>
        <div className={EmailViewClasses.join(" ")}>{this.props.email}</div>
        <div className={PhoneNumberViewClasses.join(" ")}>
          {this.props.phoneNumber}
        </div>
        <ContactControls _id={this.props._id} />
      </div>
    );
  }
}



export default Contact;

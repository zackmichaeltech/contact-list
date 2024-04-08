import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import classes from "./ContactList.css";

import Contact from "../../components/ContactList/Contact";
import Main from "../Main/Main";
import Aux from "../../hoc/Aux/Aux";

class ContactList extends Component {

  componentDidMount() {
   
    this.props.onFetchContacts(this.props._user);
  }

  render() {
    return (
      <Aux>
        <Main />

        <div className={classes.ContactList}>
          {this.props.contacts.map(contact => (
            <Contact
              key={contact._id}
              _id={contact._id}
              name={contact.name}
              email={contact.email}
              address={contact.streetAddress}
              phoneNumber={contact.phoneNumber}
              postalCode={contact.postalCode}
            />
          ))}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    _user: state.auth._id,
    contacts: state.contact.contacts,
    loading: state.contact.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchContacts: _user => dispatch(actions.fetchContacts(_user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

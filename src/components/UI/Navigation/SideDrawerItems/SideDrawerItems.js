import React, { Component } from 'react';
import classes from './SideDrawerItems.css';
import { connect } from 'react-redux';
import * as actions from "../../../../store/actions/index";

class SideDrawerItems extends Component {


  componentDidMount() {
    this.props.onFetchContacts();  
  }

  

  render() { 

    let combinedClasses = ["material-icons", classes.SideIcon];
    let numberOfContacts = this.props.contacts.length 
  
    return ( 
      <ul className={classes.SideDrawerItems}>
      <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>contacts</i>
        Contacts <strong className={classes.number}> ({numberOfContacts})</strong>
      </li>
      {/* <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>star</i>Frequent</li>
      <li className={classes.SideDrawerListItems}><i className={combinedClasses.join(" ")}>content_copy</i>Duplicates</li> */}
    </ul>
     )
  }
}
 
const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onFetchContacts: _user => dispatch(actions.fetchContacts(_user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerItems);

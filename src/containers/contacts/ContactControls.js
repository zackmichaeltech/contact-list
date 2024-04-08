import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './ContactControls.css'

import Aux from '../../hoc/Aux/Aux'

class ContactControls extends Component {

    deleteContactHandler = (event, _id) => {
        event.preventDefault()
        this.props.onDeleteContact(_id)
    }

    editContactHandler = (event, _id) => {
        event.preventDefault()
    }

    render() { 
        let combinedClasses = ["material-icons", classes.Delete]
        return ( 
            <Aux> 

                <div onClick={(event) => {this.deleteContactHandler(event, this.props._id)}}>
                    <i className={combinedClasses.join(" ")}>delete</i>
                </div>
            </Aux>
         )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contact.contacts,
        loading: state.contact.loading
    };
}
 
const mapDispatchToProps= dispatch => {
    return {
        onDeleteContact: (_id) => dispatch(actions.deletedContact(_id)),
        onEditContact: (_id) => dispatch(actions.editContact(_id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactControls);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Loading from '../../components/UI/Loading/Loading';
import * as actions from '../../store/actions/index';

import classes from './Contacts.css';


class AddContactsInfo extends Component {
   state = { 
    contactForm: { 
        name: {
            elementType: "input",
            elementAttr: {
                type: 'text',
                placeholder: 'Full Name'
            },
            value: ''
        },
       email: {
            elementType: "input",
            elementAttr: {
                type: 'email',
                placeholder: 'Email Address'
        },
        value: ''
    },
       phoneNumber: {
            elementType: "input",
            elementAttr: {
                type: 'text',
                placeholder: 'Phone Number'
        },
        value: ''
    },
       street: {
            elementType: "input",
            elementAttr: {
                type: 'text',
                placeholder: 'Address'
            },
        value: ''
    },
       postalCode: {
            elementType: "input",
            elementAttr: {
                type: 'text',
                placeholder: 'Postal Code'
        },
        value: ''
    }
    }
   }
   

   contactInfoHandler = (event) => {
        event.preventDefault();
       

        const contactFormData = {};
        for (let contactFormElementName in this.state.contactForm) {
            contactFormData[contactFormElementName] = this.state.contactForm[contactFormElementName].value
        }
        
        let name            = contactFormData.name
        let email           = contactFormData.email
        let streetAddress   = contactFormData.street
        let postalCode      = contactFormData.postalCode
        let phoneNumber     = contactFormData.phoneNumber
        let _user           = this.props.userId
        
            this.props.onAddContact(name, email, streetAddress, postalCode, phoneNumber, _user)
            this.props.closed()
            this.props.history.push('/contactsList');
   }

   inputChangedHandler = (event, inputId) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedContactFormElement = {
            ...updatedContactForm[inputId]
        }
        updatedContactFormElement.value = event.target.value
        updatedContactForm[inputId] = updatedContactFormElement;

        this.setState({
            contactForm: updatedContactForm
        })
   }

    render() { 
        let combinedButtonClasses = ["btn btn-warning", classes.Button];

        const contactFormArray = [];
        for (let key in this.state.contactForm) {
            contactFormArray.push({
                id: key,
                attr: this.state.contactForm[key]
            })
        }
        let form = (
            <form onSubmit= {this.contactInfoHandler}>
                {contactFormArray.map(contactFormElement => (
                    <Input 
                        key={contactFormElement.id}
                        elementType={contactFormElement.attr.elementType}
                        elementAttr={contactFormElement.attr.elementAttr}
                        value={contactFormElement.attr.value}
                        changed={(event) => this.inputChangedHandler(event, contactFormElement.id)} />
                ))}
                <button className={combinedButtonClasses.join(" ")}>SAVE</button>
            </form> 
        );
        if(this.props.loading) {
            form = <Loading/>
        }

        return ( 
            <div className={classes.Contacts}>
            <h4 className={classes.Label}>Add Contact Info</h4>      
                {form}
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        loading: state.contact.loading,
        userId: state.auth._id,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddContact: (name, email, streetAddress, postalCode, phoneNumber, _user) => dispatch(actions.addContact(name, email, streetAddress, postalCode, phoneNumber, _user))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddContactsInfo));
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addContactSuccess = (_id, name, email, streetAddress, postalCode, phoneNumber) => {
    return {
        type: actionTypes.ADD_CONTACT_SUCCESS,
        _id: _id,
        name: name,
        email: email,
        streetAddress: streetAddress,
        postalCode: postalCode,
        phoneNumber: phoneNumber
    };
};

export const addContactFail = (err) => {
    return {
        type: actionTypes.ADD_CONTACT_FAIL,
        err: err        
    };
};

export const addContactStart = () => {
    return {
        type: actionTypes.ADD_CONTACT_START
    }
}

export const fetchContactsSuccess = (contacts) => {
    return {
        type: actionTypes.FETCH_CONTACTS_SUCCESS,
        contacts: contacts,
    }
};

export const fetchContactsFail = (err) => {
    return {
        type: actionTypes.FETCH_CONTACTS_FAIL,
        err: err
    }
};

export const fetchContactsStart = () => {
    return {
        type: actionTypes.FETCH_CONTACTS_START,
    }
};

export const deletedContactStart = () => {
    return {
        type: actionTypes.DELETE_CONTACT_START,
    }
};

export const deletedContactSuccess = (deletedContact) => {
    return {
        type: actionTypes.DELETE_CONTACT_SUCCESS,
        id: deletedContact._id
    }
};

export const deletedContactFail = (err) => {
    return {
        type: actionTypes.DELETE_CONTACT_FAIL,
        err: err
    }
};

export const editContactStart = () => {
    return {
        type: actionTypes.EDIT_CONTACT_START,
    }
};

export const editContactSuccess = (editedContact) => {
    return {
        type: actionTypes.EDIT_CONTACT_SUCCESS,
        id: editedContact._id,
        contact: editedContact        
    }
};

export const editContactFail = (err) => {
    return {
        type: actionTypes.EDIT_CONTACT_FAIL,
        err: err
    }
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    }
}

export const fetchUserSuccess = (_id, googleId, idToken) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        _id: _id,
        googleId: googleId,
        idToken: idToken
    }
}

export const fetchUserFail = (err) => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        err: err
    }
}


export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserStart());
        axios.get('/api/current_user')
        .then(result => {
            //console.log(result.data);
            dispatch(fetchUserSuccess(result.data._id, result.data.googleId, result.data.idToken))
        })
        .catch(err => {
            dispatch(fetchUserFail(err))
        })
    }
}



export const addContact = (name, email, streetAddress, postalCode, phoneNumber, _user) => {
    return dispatch => {
        dispatch(addContactStart());
        axios.post('http://localhost:8080/contactsList', {name, email, streetAddress, postalCode, phoneNumber, _user})
            .then(result => {
                dispatch(addContactSuccess(result.data._id, result.data.name, result.data.email, result.data.streetAddress, result.data.postalCode, result.data.phoneNumber, result.data._user))
            })
            .catch(err => {
                dispatch(addContactFail(err))
            })
    }
}

export const fetchContacts = (_user) => {
    //console.log("actions", _user)
    return dispatch => {
        // console.log("before", getState())
        dispatch(fetchContactsStart())
        axios.get('http://localhost:8080/contactsList/' + _user)
            .then(res => {
                const fetchedContacts = [];
                for (let key in res.data) {
                    fetchedContacts.push({
                        ...res.data[key],
                        id: key
                })
        }
        //console.log("after", getState())
            dispatch(fetchContactsSuccess(fetchedContacts))
        })
        .catch(err => {
            dispatch(fetchContactsFail(err))
        })
    }
}

export const deletedContact = (_id) => {
    return dispatch => {
        dispatch(deletedContactStart())
        axios.delete(`http://localhost:8080/contactsList/${_id}`)
            .then(res => {
                const deletedContact = res.data;        
            dispatch(deletedContactSuccess(deletedContact))
        })
        .catch(err => {
            dispatch(deletedContactFail(err))
        })
    }
}

export const editContact = (_id) => {
    return dispatch => {
        dispatch(editContactStart())
        axios.update(`http://localhost:8080/contactsList/${_id}`)
            .then(res => {
                const editedContact = res.data;
                console.log("editContactFN", editedContact);        
            dispatch(editContactSuccess(editedContact))
        })
        .catch(err => {
            dispatch(editContactFail(err))
        })
    }
}
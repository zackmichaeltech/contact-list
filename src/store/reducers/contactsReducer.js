import * as actionTypes from '../actions/actionTypes';


const initialState = {
    contacts: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CONTACT_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.ADD_CONTACT_SUCCESS: 
            const newContact = {
                _id: action._id,
                name: action.name,
                email: action.email,
                streetAddress:action.streetAddress,
                postalCode: action.postalCode,
                phoneNumber: action.phoneNumber,
            }
            return {
                ...state, 
                loading: false,
                contacts: state.contacts.concat(newContact)
            };
        case actionTypes.ADD_CONTACT_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.FETCH_CONTACTS_START:
            return{
                ...state,
                loading: true
            };
        case actionTypes.FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
                loading: false
            };
        case actionTypes.FETCH_CONTACTS_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.DELETE_CONTACT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.filter((contact, i) => contact._id !== action.id)
            }   
        case actionTypes.DELETE_CONTACT_FAIL:
            return {
                ...state,
                loading: false
            } 
        case actionTypes.EDIT_CONTACT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.EDIT_CONTACT_SUCCESS:
           
            return {
                ...state,
                contacts: state.contacts.map(item => item._id === action.contact._id ? action.contact : item),
            }   
        case actionTypes.EDIT_CONTACT_FAIL:
            return {
                ...state,
                loading: false
            } 
        default:
            return state;
    }   
}

export default reducer;
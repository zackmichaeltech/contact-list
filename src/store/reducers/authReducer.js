import * as actionTypes from '../actions/actionTypes';

// const initialState = {
    
// }

const authReducer = (state = {}, action) => {
    
    switch (action.type) {  

        case actionTypes.FETCH_USER_SUCCESS:
            return {
                _id: action._id || false,
                googleId: action.googleId || false,
                idToken: action.idToken || false
                //action.payload || false
            }
        default: 
            return state;
    }
}



export default authReducer;


    // case actionTypes.FETCH_USERS_SUCCESS:
    //     return {
    //         ...state,
    //         _id: action._id,
    //         googleId: action.googleId,
    //         idToken: action.idToken
    //     };
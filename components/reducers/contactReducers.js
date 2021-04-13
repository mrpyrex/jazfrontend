import { CONTACT_ADD_FAIL, CONTACT_ADD_REQUEST, CONTACT_ADD_RESET, CONTACT_ADD_SUCCESS } from "../constants/contactConstants";

export const contactAddReducer = (state = { }, action) => {
    switch (action.type) {
        case CONTACT_ADD_REQUEST:
            return {
                loading: true
            }
        
        case CONTACT_ADD_SUCCESS:
            return { loading: false, success: true, contact: action.payload }
        
        case CONTACT_ADD_FAIL:
            return { loading: false, error: action.payload }
               
        case CONTACT_ADD_RESET:
            return {}
        
        default:
            return state;
    }
}
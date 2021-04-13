import axios from "axios"
import {  CONTACT_ADD_FAIL, CONTACT_ADD_REQUEST, CONTACT_ADD_SUCCESS } from "../constants/contactConstants"

export const contact = (first_name, last_name, email, phone, event_date, guest_count, message ) => async (dispatch) => {

    try {
        dispatch({
            type: CONTACT_ADD_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`http://localhost:8000/api/contact/create/`,
            { 'first_name': first_name, 'last_name': last_name, 'email': email, 'phone': phone, 'event_date': event_date, 'guest_count': guest_count, 'message': message },
            config)
        
        dispatch({
            type: CONTACT_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONTACT_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
    
}

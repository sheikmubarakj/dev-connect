import  uuid from "uuid/v4"; //generate random id

import { SET_ALERT,REMOVE_ALERT } from "./constants";


export const setAlert = (msg,alertType) => dispatch => {
        const id = uuid();

        dispatch({
            type:SET_ALERT,
            payload:{msg,alertType,id}
        })

        setTimeout(() => dispatch({ type:REMOVE_ALERT, payload:id }),3000)
}
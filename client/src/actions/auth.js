
import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from "../utils/setAuthToken";

export const signup  = ({name, email, password}) => dispatch => {
  const config = {
    headers: {
      'content-type': 'application/json'
    }
  };
  // const body = JSON.stringify({name, email, password2, password});
  const body = {name, email, password};

  axios.post('/api/users', body, config).then((result) => {
    // console.log(result);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: result.data
    })
    dispatch(loadUser());
  }).catch((error, msg) => {
    

    if (error && error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach((error) => {
        setAlert(error.msg, "danger");
      });
    }
  });
}

export const login  = ({email, password}) => dispatch => {

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = {email, password};

    axios.post('/api/auth', body, config).then((result) => {
        // console.log(result);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: result.data
        })
        dispatch(loadUser());
      }).catch((error, msg) => {
        if (error && error.response && error.response.data && error.response.data.errors) {
          error.response.data.errors.forEach((error) => {
            dispatch(setAlert(error.msg, "danger"));
          });
        }
        dispatch({
            type: 'LOGIN_FAIL'
        })
      });

}

export const logout = (history) => async dispatch => {
  dispatch({
    type: 'LOGOUT'
  })
  // history.push("/");
};

export const loadUser = () => async dispatch => {



if (localStorage.token) {
  setAuthToken(localStorage.token)
}

try {

  const res = await axios.get("/api/auth");

  // console.log("userresponsee", res.data)

  dispatch({
      type: "USER_LOADED",
      payload: res.data
  })

} catch (err) {

  dispatch({
      type: "AUTH_ERROR"
  })
}

};


// https://pdsswo.py.gov.in/Helpdesk/Payment_Status.aspx
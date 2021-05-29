import axios from 'axios';
import { setAlert } from './alert';

export const loadUserProfile = () => async dispatch => {
    

    try {

        const res = await axios.get("/api/profile/me");
      
        // console.log("profile", res.data)
      
        dispatch({
            type: "USER_PROFILE_LOADED",
            payload: res.data
        })
      
      } catch (err) {
      
        dispatch({
            type: "AUTH_ERROR"
        })
      }
};

export const getProfiles = () => async dispatch => {

    

    try {

        const res = await axios.get("/api/profile");
      
        // console.log("profile", res.data)
      
        dispatch({
            type: "PROFILE_LIST_LOADED",
            payload: res.data
        })
      
      } catch (err) {
      
        dispatch({
            type: "PROFILE_ERROR"
        })
      }  

};

export const getProfileById = (userId) => async dispatch => {
    

    try {

        const res = await axios.get(`/api/profile/user/${userId}`);
      
        // console.log("profile", res.data)
      
        dispatch({
            type: "USER_PROFILE_LOADED",
            payload: res.data
        })
      
      } catch (err) {
      
        dispatch({
            type: "AUTH_ERROR"
        })
      }
};

export const getGithubRepos =(username) => async dispatch => {
    try {

        const res = await axios.get(`/api/profile/github/${username}`);;
      
        // console.log("github data", res.data)
      
        dispatch({
            type: "LOAD_GITHUB_DATA",
            payload: res.data
        })
      
      } catch (err) {
      
        dispatch({
            type: "PROFILE_ERROR"
        })
      }
};

export const createProfile = (formData, history, isEdit = false) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let res;
     
        res = await axios.post("/api/profile", formData, config);

        // if (!profile.id) {
        //     res = await axios.post("/api/profile", formData, config);
        // } else {
        //     res = await axios.post("/api/profile", formData, config);
        // }

        // console.log("profile created", res.data)
      
        dispatch({
            type: "USER_PROFILE_CREATED",
            payload: res.data
        })

        if (isEdit) {
            dispatch(setAlert("Profile Edited Successfully.!", "success")) 
        } else {
            dispatch(setAlert("Profile Created Successfully.!", "success")) 
        }

        history.push("/dashboard");
      } catch (err) {
      
        
        const errors = err.response.data.errors


        if (errors) {

            errors.forEach(error => {
                dispatch(setAlert(error.msg, "danger"))
            })

        }

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status }
        })

      }

};

export const deleteEducation = (id) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let res;

        res = await axios.delete(`/api/profile/education/${id}`, config);
        // console.log("profile created", res.data)

      
        dispatch({
            type: "USER_PROFILE_UPDATED",
            payload: res.data
        });
        
        // history.push("/dashboard")      
      } catch (err) {
      
        const errors = err.response.data.errors


        if (errors) {

            errors.forEach(error => {
                dispatch(setAlert(error.msg, "danger"))
            })

        }

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status }
        })
      }

};

export const deleteExperience = (id) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let res;

        res = await axios.delete(`/api/profile/experience/${id}`, config);
        // console.log("profile created", res.data)

      
        dispatch({
            type: "USER_PROFILE_UPDATED",
            payload: res.data
        });
        
        // history.push("/dashboard")      
      } catch (err) {
      
        const errors = err.response.data.errors


        if (errors) {

            errors.forEach(error => {
                dispatch(setAlert(error.msg, "danger"))
            })

        }

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status }
        })
      }

};

export const addEducation = (formData, history) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let res;

        res = await axios.put("/api/profile/education", formData, config);
        // console.log("profile created", res.data)

      
        dispatch({
            type: "USER_PROFILE_UPDATED",
            payload: res.data
        });
        
        history.push("/dashboard")      
      } catch (err) {
      
        const errors = err.response.data.errors


        if (errors) {

            errors.forEach(error => {
                dispatch(setAlert(error.msg, "danger"))
            })

        }

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status }
        })
      }

};

export const addExperience = (formData, history) => async dispatch => {
    // axios.put("/api/profile/experience")

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let res;

        res = await axios.put("/api/profile/experience", formData, config);
        // console.log("profile created", res.data)

      
        dispatch({
            type: "USER_PROFILE_UPDATED",
            payload: res.data
        });
        
        history.push("/dashboard")      
      } catch (err) {
      
        const errors = err.response.data.errors


        if (errors) {

            errors.forEach(error => {
                dispatch(setAlert(error.msg, "danger"))
            })

        }

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status }
        })
      }
};

// axios.post("/api/profile")
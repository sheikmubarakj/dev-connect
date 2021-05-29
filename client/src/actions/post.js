import axios from 'axios';
// import { setAlert } from './alert';

export const getPost = () => async dispatch => {

    try {
        const res = await axios.get("/api/posts");

        dispatch({
            type:"GET_POSTS",
            payload:res.data
        })

    } catch (err) {
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};

export const addLike = (postId) => async dispatch => {

    try {
        const res = await axios.put(`/api/posts/likes/${postId}`)

        dispatch({
            type: "UPDDATE_LIKES",
            payload: { postId, likes: res.data }
        })

    } catch (err) {
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};

export const removeLike = (postId) => async dispatch => {

    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`)

        dispatch({
            type: "UPDDATE_LIKES",
            payload: { postId, likes: res.data }
        })

    } catch (err) {
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};

export const submitPost = (formData) => async dispatch => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    try {
        const res = await axios.post("/api/posts", formData, config)

        dispatch({
            type: "CREATE_POST",
            payload: res.data 
        })
        alert('added')
    } catch (err) {
        alert('error block')
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};

export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    try {
        const res = await axios.post(`/api/posts/comments/${postId}`,formData,config)

        dispatch({
            type: "ADD_COMMENT",
            payload: res.data 
        })
        // alert('added')
    } catch (err) {
        alert('error block')
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};


export const removeComment = (postId, commentId) => async dispatch => {
  

    try {
         await axios.delete(`/api/posts/comments/${postId}/${commentId}`)

        dispatch({
            type: "REMOVE_COMMENT",
            payload: commentId 
        })
        // alert('added')
    } catch (err) {
        alert('error block')
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};



// addComment

export const deletePost = (postId) => async dispatch => {

    try {
         await axios.delete(`api/posts/${postId}`)

        dispatch({
            type: "DELETE_POST",
            payload: postId
        })
        // alert('added')
    } catch (err) {
        alert('error block')
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};

export const getPostById = (postId) => async dispatch => {

    try {
        const res = await axios.get(`/api/posts/${postId}`);
        // console.log('res.data', res.data);
        dispatch({
            type: "GET_POST",
            payload: res.data
        })
        // alert('added')
    } catch (err) {
        alert('error block')
        dispatch({
            type:"POST_ERROR",
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
};


// deletePost

// submitPost

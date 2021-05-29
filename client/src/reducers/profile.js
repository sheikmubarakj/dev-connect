
const initialState = {
    profile:null,
    profiles:[],
    repos:[],
    loading:true,
    error:{}
}

export default function profile (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case "USER_PROFILE_CREATED":
        case "USER_PROFILE_UPDATED":
        case "USER_PROFILE_LOADED":
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case "PROFILE_LIST_LOADED": 
        return {
            ...state,
            loading: false,
            profiles: payload
        }
        case "LOAD_GITHUB_DATA": 
        return {
            ...state,
            loading: false,
            repos: payload
        }
        case "PROFILE_ERROR":
        case "USER_PROFILE_CREATED_ERROR":
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            }        
        default:
            return state;
    }
}
// 
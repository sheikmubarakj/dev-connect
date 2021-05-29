

const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null,
    token: localStorage.getItem("token")
};

export default function auth (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case "USER_LOADED": 
        return {
            ...state,
            user: payload,
            isAuthenticated: true,
            loading: false
        }
        case "LOGIN_FAIL":
            break;
        case "LOGOUT":
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: true
            }
        default:
            return state;
    }
};
import {LOGIN_SUCCESSFUL, LOGOUT_REQUEST, REGISTERED_SUCCESSFULLY} from "../ActionTypes";
import jwt from 'jsonwebtoken';

const validateCredentials = () => {
    const token = sessionStorage.getItem('token');
    if (token === null) {
        return false;
    } else {
        try {
            jwt.decode(token);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

const initialState = {
    authorized: validateCredentials(),
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                authorized: true
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                authorized: false
            };
        case REGISTERED_SUCCESSFULLY:
            return {};
        default:
            return state;
    }
}

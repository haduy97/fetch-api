import { GET_USER, GET_USER_FAIL } from '../redux/constant/action-types';
import { findAllByTestId } from '@testing-library/react';

const initState = {
    users: [],
    errorCatch: {
        error: false,
        message: ""
    }
}

const UserReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                users: [...action.payload],
            };
        case GET_USER_FAIL:
            return {
                ...state,
                   errorCatch: action.error,
            };
        default:
            return state;
    }
};

export default UserReducers;
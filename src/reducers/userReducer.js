import { FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS} from '../actions/types';

const initialState = {
    user: [],
    isFetching: false,
    error: false
}

export default ( state=initialState, action ) => {
    switch(action) {
        case FETCHING_USER: {
            return {
                ...state,
                isFetching: true,
                user: []
            }
        }
        case FETCHING_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isFetching: false
            }
        }
        case FETCHING_USER_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: true
            }
        }
        default: return state
    }

} 
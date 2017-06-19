import {FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS} from '../actions/types';

const initialState = {
    courses: [],
    isFetching: false,
    error: false
}
export default (state=initialState, action) => {
   
    switch(action.type) {
        case FETCHING_DATA: {
            return {
                ...state,
                isFetching: true,
                courses: []
            }
        }
        case FETCHING_DATA_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                courses: action.courses
            }
        }
        case FETCHING_DATA_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: true

            }
        }
        default: return state
    }
}
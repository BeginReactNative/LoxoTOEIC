import { FETCHING_USER, FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS } from './types';

export function getUser() {
    return {
        type: FETCHING_USER
    }
}
export function getUserSuccess(data) {
    return {
        type: FETCHING_USER_SUCCESS,
        payload: data
    }
}
export function getUserFailure() {
    return {
        type: FETCHING_USER_FAILURE
    }
}
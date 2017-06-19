import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './types';
import coursesAPI from '../api/api';
export const getData = () => {
    return {
        type: FETCHING_DATA,
        data: []
    }
}

export const getDataSuccess = (data) => {
   return {
        type: FETCHING_DATA_SUCCESS,
        payload: data
   }
}
export const getDataFailure = () => {
    return {
        type: FETCHING_DATA_FAILURE
    }
}
export  function fetchDataFromAPI() {
   
    return (dispatch) => {
       fetch('http://5826ed963900d612000138bd.mockapi.io/items')
        .then(response => response.json())
        .then((responseJson) => {
            console.log('AAAAAAAAA',responseJson)
            dispatch(getDataSuccess(responseJson))
           
        })
        .catch(err => console.log(err))
        
    }
}

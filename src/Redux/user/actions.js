import { ActionTypes } from './actionTypes';

/*===================================
|| 
|| Action Creators
|| Returns an Object that provides
||  1. action type
||  2. Data to update in store.
|| 
===================================*/
export const userAuthUpdate = (isLoggedIn, profile) => {

    return {
        type: ActionTypes.USER_AUTH_UPDATE,
        isLoggedIn: isLoggedIn,
        profile: profile,
    }
} 

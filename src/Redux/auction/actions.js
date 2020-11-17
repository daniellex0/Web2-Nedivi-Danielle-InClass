import { ActionTypes } from './actionTypes';
import API from 'common/API.js';

/*---------------------------
| Action Creators
---------------------------*/
export const auctionCurrentSet = (auction) => {
    return {
        type: ActionTypes.BM_AUCTIONS_CURRENT_SET,
        current: auction,
    }
}

/*---------------------------
| Action Dispatchers
---------------------------*/
export const loadAuctions = () => {
    return (dispatch, getState) => {
        API.get('/auctions/current')
            .then((apiResponse) => {
                dispatch(auctionCurrentSet(apiResponse.data.payload.currentAuction))
            });
    }
}
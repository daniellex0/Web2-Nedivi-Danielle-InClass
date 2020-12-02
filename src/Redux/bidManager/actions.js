import { ActionTypes } from './actionTypes';
import API from 'common/API.js';

/*===================================
|| 
|| Action Creators
|| Returns an Object that provides
||  1. action type
||  2. Data to update in store.
|| 
===================================*/
export const currentUpdate = (current) => {
    
    return {
        type: ActionTypes.BM_CURRENT_UPDATE,
        current: current,
    }
}

export const pastUpdate = (past) => {
    return {
        type: ActionTypes.BM_PAST_UPDATE,
        past: past,
    }
}

/*===================================
|| 
|| Action Dispatchers
|| 
===================================*/
export const loadUserBids = () => {
    return (dispatch, getState) => {
        API.get('/bidSubmission/getBids').then((apiResponse) => {
            console.log('apiResponse', apiResponse);

            const bidSubmissions = apiResponse.data.payload.bidSubmissions ? apiResponse.data.payload.bidSubmissions : [];

            const filtered = filterBids(bidSubmissions);
            dispatch(currentUpdate(filtered.current));
            dispatch(pastUpdate(filtered.past));
        });
    }
}

const filterBids = (bidSubmissions) => {
    const currentSubmission = bidSubmissions && bidSubmissions.find((bidSub) => {
        return bidSub.status === 'draft';
    });

    const current = (currentSubmission) ? currentSubmission : {};

    const past = bidSubmissions && bidSubmissions.filter((bidSub) => {
        return bidSub.status !== 'draft';
    });

    return {
        current: current,
        past: past,
    }
}


export const addLotToBids = (lot) => {
    return (dispatch, getState) => {

        const postData = {
            lot: lot,
        }

        // Grab existing state
        const { bidManager: { current: currentBidSubmission } } = getState();

        console.log('currentBidSubmission', currentBidSubmission);


        if (!currentBidSubmission.bids) {
            API.post('/bidSubmission/addLot', postData).then((apiResponse) => {
                dispatch(currentUpdate(apiResponse.data.payload.bidSubmission));
            });
        } else {
            // check to make sure it does not already exist
            const alreadyExists = currentBidSubmission.bids && currentBidSubmission.bids.find((currBid) => {
                return (currBid.lot.id === lot.id);
            });

            if (!alreadyExists) {
                API.post('bidSubmission/addLot', postData).then((apiResponse) => {
                    dispatch(currentUpdate(apiResponse.data.payload.bidSubmission));
                });
            }
        }
    }
}

/*---------------------------
| Remove Lot from Bids
---------------------------*/
export const removeLotToBids = (lot) => {
    return (dispatch, getState) => {

        const postData = {
            lot: lot,
        }

        // Grab existing state
        const { bidManager: { current: currentBidSubmission } } = getState();

        API.post('/bidSubmission/removeLot', postData).then((apiResponse) => {

            currentBidSubmission.bids = currentBidSubmission.bids.filter((bid) => {
                return bid.lot.id !== lot.id;
            });

            dispatch(currentUpdate(currentBidSubmission));
        });
    } 
}

/*---------------------------
| Submit Bids
---------------------------*/
export const submitBids = (callback) => {
    return (dispatch, getState) => {
        API.post('/bidSubmission/submitBids').then((apiResponse) => {
            console.log('submitBids Action:', apiResponse);
            dispatch(loadUserBids());
            callback();
        });
    }
}

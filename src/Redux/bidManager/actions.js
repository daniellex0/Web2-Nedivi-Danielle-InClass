import { ActionTypes } from './actionTypes';

/*===================================
|| 
|| Action Creators
|| Returns an Object that provides
||  1. action type
||  2. Data to update in store.
|| 
===================================*/
export const bidsUpdate = (bids) => {

    return {
        type: ActionTypes.BM_BIDS_UPDATE,
        bids: bids,
    }
} 


/*===================================
|| 
|| Action Dispatchers
|| 
===================================*/
export const addLotToBids = (lot) => {
    return (dispatch, getState) => {

        // Grab existing state
        const { bidManager: { bids } } = getState();

        // Cloning
        let newBids = bids.filter((bid) => {
            return (bid.lot.id !== lot.id);
        });

        // Check to see if this bid is already in the bid manager
        const alreadyExists = newBids.find((newBid) => {
            return (newBid.lot.id === lot.id);
        });

        // If it does not already exist, add it to our bids.
        if (!alreadyExists) {
            newBids.push({
                lot: lot,
                low: 0,
                high: 0,
            });

            // Trigger Action Creator with new Bids
            return dispatch(bidsUpdate(newBids));
        }

    }
}

/*---------------------------
| Remove Lot from Bids
---------------------------*/
export const removeLotToBids = (lot) => {
    return (dispatch, getState) => {

        // Grab existing state
        const { bidManager: { bids } } = getState();

        // Cloning
        let newBids = bids.filter((bid) => {
            return (bid.lot.id !== lot.id);
        });

        // Trigger Action Creator with new Bids
        return dispatch(bidsUpdate(newBids));
    }
}
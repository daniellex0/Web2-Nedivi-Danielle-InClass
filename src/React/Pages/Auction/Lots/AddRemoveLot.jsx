import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

/* Scripts ---------------------------*/
import { addLotToBids, removeLotToBids } from 'Redux/bidManager/actions.js';

/* Components ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const AddRemoveLot = ({ lot }) => {
    // Grab Redux Dispatcher to update store
    const dispatch = useDispatch();

    // Grab Redux Store
    const { bidManager: { current: { bids } }, user } = useSelector((state) => state);

    // Check if this lot is in our bids
    const isInBids = bids && bids.find((bid) => {
        return bid.lot.id === lot.id;
    });

/*---------------------------
| Methods
---------------------------*/
    const handleOnClick = () => {
        console.log('You click me. And I should add a lot to bids'); 
        dispatch(addLotToBids(lot));
    }

    const handleRemoveLot = () => {
        console.log('Remove lot'); 
        dispatch(removeLotToBids(lot));
    }

    if (!user.isLoggedIn) { return ''; }

    return (
        <AddRemoveLotStyled className='AddRemoveLot'>
        {
            (isInBids)
            ?  <Button onClick={ handleRemoveLot }>Remove Lot</Button> 
            :  <Button onClick={ handleOnClick }>Add Lot</Button>
        }
        </AddRemoveLotStyled>
    );
}

export default AddRemoveLot;

const AddRemoveLotStyled = styled.div`
    
`;
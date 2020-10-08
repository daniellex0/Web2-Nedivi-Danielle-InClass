import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Template from '../Shared/Template.jsx';

const Auction = () => {

    return (
        <AuctionStyled className='Auction'>
            <Template
                title='Auction'
                aside={ true }
            >
                Auction
            </Template>  
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    
`;
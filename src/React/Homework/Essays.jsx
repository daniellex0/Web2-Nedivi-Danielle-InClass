import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essay from './Essay.jsx';

const Essays = ({ essays }) => {

    return (
        <EssaysStyled>
            {
                essays.map((essay, idx) => {
                    return <Essay key={ idx } essay={ essay }/>
                })
            }
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    border: solid 5px purple;
    padding: 20px;
    background-color: #eee;
`;
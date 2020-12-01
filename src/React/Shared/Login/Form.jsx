import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import * as UserActions from 'Redux/user/actions.js';
import * as BidManagerActions from 'Redux/bidManager/actions.js'

/* Components ---------------------------*/
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';

const Form = () => {

    const dispatch = useDispatch();

    const defaultData = [
        { id: 'email', value: '', required: true, label: 'Email', type: 'text', },
        { id: 'password', value: '', required: true, label: 'Password', type: 'text',},
    ]

    const handleOnSubmit = (apiResponse) => {
        console.log('newFormData Posted From', apiResponse);
        if (apiResponse.success) {
            const isLoggedIn = true;
            const profile = apiResponse.payload.user;

            console.log('profile', profile);

            dispatch(UserActions.userAuthUpdate(isLoggedIn, profile));
            dispatch(BidManagerActions.loadUserBids());
        } else {
            console.log('We could not find the user.');
        }
    }

    return (
        <FormStyled className='Form'>
                <UniversalForm 
                    formData={ defaultData } 
                    submitText='Log In'
                    apiEndpoint='/users/login'
                    onSubmit={ handleOnSubmit }
                /> 
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.div`
    
`;
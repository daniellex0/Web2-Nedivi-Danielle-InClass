import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Template from '../Shared/Template.jsx';

import Form from 'React/Shared/UniversalForm/Form.jsx';
import Feedback from 'React/Shared/UniversalForm/Feedback.jsx';
import LabelInput from 'React/Shared/UniversalForm/LabelInput.jsx';
import Input from 'React/Shared/UniversalForm/Controls/Input.jsx';
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const defaultData = [
    { id: 'username', value: '', },
    { id: 'password', value: '', }
]

const Login = () => {
/*---------------------------
| Props and State
---------------------------*/
    const [formData, formDataUpdate] = useState(defaultData);
    const [formStatus, formStatusUpdate] = useState('pending');
    const [feedbackMessage, feedbackMessageUpdate] = useState('');

/*---------------------------
| Methods
---------------------------*/
    const grabFormField = (id) => {
        return formData.find(formField => formField.id === id);
    }

    const handleOnChange = (newFormField) => {
        console.log('handleOnChange', newFormField);

        const newFormData = formData.map((field) => {
            return (field.id === newFormField.id) ? newFormField : field;
        });

        formDataUpdate(newFormData);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Validate from data
        let errors = false
        formData.forEach((field) => {
            if (field.value.length < 1) {
                errors = true;
                feedbackMessageUpdate(`The ${field.id} is required`);
            }
        });

        // if invalid, update error message
        if (errors) {
            formStatusUpdate('error');
        } else {
            // all passes we will submit data
            feedbackMessageUpdate('Eureka, you passed our validation');
            formStatusUpdate('success');
        }

        // if all passes we will submit data

        // show message
    }

    /*---------------------------
    | Render
    ---------------------------*/

    return (
        <LoginStyled className='Login'>
            <Template title='Login'>
                <Feedback 
                    formStatus={ formStatus }
                    feedbackMessage={ feedbackMessage }
                    onClose={ () => { formStatusUpdate('pending') } }
                />
                <Form onSubmit={ handleOnSubmit }>
                    This is where our form content goes
                    <LabelInput
                        label='Username'
                        formField={ grabFormField('username') }
                    >
                        <Input 
                            formField={ grabFormField('username') }
                            onChange={ handleOnChange } 
                        />
                    </LabelInput>
                    <LabelInput
                        label='Password'
                        formField={ grabFormField('password') }
                    >
                        <Input 
                            formField={ grabFormField('password') }
                            onChange={ handleOnChange } 
                        />
                    </LabelInput>
                    <Button type='submit'>Log In</Button>
                </Form>
            </Template>  
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;
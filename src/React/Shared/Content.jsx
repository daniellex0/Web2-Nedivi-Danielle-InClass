import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import Login from '../Pages/Login.jsx';
import Home from '../Pages/Home.jsx';
import Auction from '../Pages/Auction.jsx';
import Contact from '../Pages/Contact.jsx';
import Homework from '../Pages/Homework/Homework.jsx';


const Content = ({auction}) => {

    return (
        <ContentStyled className='Content'>
            <Switch>
                <Route path='/login' component={ Login } />
                <Route path='/auction' component={ Auction } />
                <Route path='/contact' component={ Contact } />
                <Route path='/homework' component={ Homework } />
                <Route path='/' component={ Home } exact />
            </Switch> 
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.main`
    
`;
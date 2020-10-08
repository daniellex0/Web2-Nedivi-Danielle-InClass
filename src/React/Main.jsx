import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components ---------------------------*/
import Content from './Shared/Content.jsx';
import Footer from './Shared/Footer.jsx';
import Header from './Shared/Header.jsx';
import Nav from './Shared/Nav.jsx';


const Main = () => {

    return (
        <div className='Main'>
            <BrowserRouter>
                <h1>In Class</h1>
                <Content />
                <Footer />
                <Header />
                <Nav />
            </BrowserRouter>
        </div>
    );
}

export default Main;
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    //should all have 'exact'?

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>Home</NavLink> 
            <NavLink to='/login' exact>Login</NavLink> 
            <NavLink to='/auction' exact>Auction</NavLink> 
            <NavLink to='/homework' exact>Homework</NavLink> 
            <NavLink to='/contact' exact>Contact</NavLink> 
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    
`;
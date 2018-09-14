import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.nav`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    background: #17252a;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;

`
const NavLinks = styled.div`
    display: flex;
    max-width: 880px;
    width: 100%;
    justify-content: space-between;

    > a {
        text-decoration: none;
        color: rgba(244, 81, 30, 1);
    }

`
const LoginLogout = styled.div`

    max-width: 105px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    > a {
        text-decoration: none;
        color: rgba(244, 81, 30, 1);
    }

`

class Navigation extends Component {
    
    render() {
        return ( 
            <NavWrap>
                <NavLinks>
                        <Link to='/api/jokes'>Jokes</Link>      
                    <LoginLogout>
                        <Link to='/api/login'>Login</Link>
                        <Link to='/api/register'>Register</Link>
                    </LoginLogout>
                </NavLinks>
            </NavWrap>
         );
    }
}
 
export default Navigation;
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Burger from './burger';

import { HOME } from '../constants/routes';

/**
 * Credits to:
 * Author: Awa Dieudonne
 * Code from: https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543
 * */ 

const Nav = styled.nav`
    cursor: pointer;
    max-width: 100vw;
    height: 11vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000001A;
    padding: 0 10%;
    display: grid;
    grid-template-columns: 2fr 4fr 4fr 4fr;
    align-items: center;

    @media(max-width: 1000px) {
        grid-template-columns: 5fr 1fr 10fr;
    }
`

const Meeto = styled.span`
    font-family: 'Work Sans', sans-serif;
    color: #20252D;
    font-weight: 700;
    font-size: 1.7em;

    span {
        color: #1E3CD1;
    }
`

const Logs = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
        color: #20252D;
        font-size: 0.7em;
        font-weight: 600;
        margin-left: 3em;
        
        &.signup {
            background: #1E3CD1 0% 0% no-repeat padding-box;
            border-radius: 11px;
            color: #F9F9F9;
            padding: 0.7em 2.24em;
        }
    }
`

const Navbar = ({ history }) => {
    return (
        <Nav>
            <Meeto onClick={() => history.push(HOME)}>
                meet <span>o</span>
            </Meeto>
            <Burger />
            <div></div>
            <Logs>
                {/*<span>LOG IN</span>
                <span className="signup">SIGN UP</span>*/}
            </Logs>
        </Nav>
    );
}

export default withRouter(Navbar);
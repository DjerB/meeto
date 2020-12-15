import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../constants/routes';

/**
 * Credits to:
 * Author: Awa Dieudonne
 * Code from: https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543
 * */ 

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0;
    padding-top: 7px;

    a {
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
        color: #20252D;
        font-size: 0.7em;
        font-weight: 600;
    }

    @media (max-width: 1000px) {
        justify-content: flex-start;
        z-index: 1000;
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        a {
            color: #fff;
            margin-bottom: 1em;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            {ROUTES.MENUS.map(({ to, label }, idx) => (
                <Link to={to} key={idx}>{label.toUpperCase()}</Link>
            ))}
        </Ul>
    );
}

export default RightNav;
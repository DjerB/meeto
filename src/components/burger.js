import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './rightNav';

/**
 * Credits to:
 * Author: Awa Dieudonne
 * Code from: https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543
 * */ 

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 5.5vh;
    transform: translateY(-50%);
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 1001;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? 'white' : '#1E3CD1'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav open={open}/>
        </>
    );
}

export default Burger
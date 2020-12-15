import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';

const Foot = styled.div`
    max-width: 100vw;
    background: #20252D 0% 0% no-repeat padding-box;
    height: 14vh;
    padding: 0 10%;
    display: grid;
    grid-template-columns: 4fr 12fr 5fr;
    align-items: center;

    @media(max-width: 1100px) {
        grid-template-columns: 4fr 8fr 5fr;
    }

    @media(max-width: 850px) {
        grid-template-columns: 4fr 5fr 5fr;
    }

    @media(max-width: 700px) {
        grid-template-columns: 4fr 3fr 5fr;
    }

    @media(max-width: 600px) {
        grid-template-columns: 4fr 1fr 5fr;
    }

    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 1em 10%;
    }
`;

const Meeto = styled.span`
    font-family: 'Work Sans', sans-serif;
    color: #20252D;
    font-weight: 700;
    font-size: 1.7em;
    color: white;

    span {
        color: #1E3CD1;
    }
`;

const Socials = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: 600;
    }

    div {
        display: flex;
        align-items: center;
    }

    .social-container {
        border-radius: 50%;
        height: 1.5em;
        width: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-left: 1em;
    }

    .social {
        fill: #20252D;
    }
`;

const socials = [
    { label: "Facebook", icon: RiFacebookFill },
    { label: "Instagram", icon: AiOutlineInstagram },
    { label: "Twitter", icon: AiOutlineTwitter },
];

const Footer = () => {
    return (
        <Foot>
            <Meeto>
                meet <span>o</span>
            </Meeto>
            <div></div>
            <Socials>
                <span>Follow us</span>
                <div>
                    {socials.map(({ label, icon: Icon }, index) => (
                        <div className="social-container" key={index}>
                            <Icon className="social" />
                        </div>
                    ))}
                </div>
            </Socials>
        </Foot>
    );
}

export default Footer;
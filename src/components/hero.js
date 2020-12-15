import React from 'react';
import styled from 'styled-components';

import SearchBar from '../components/searchbar';

import illustration from '../images/home-illustration.png';

const HeroContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 3em;

    @media(max-width: 1000px) {
        height: 40vh;
    }

    .hero {
        width: 60%;
        left: 40%;
        position: relative;

        @media(max-width: 1000px) {
            display: none;
        }
    }
    
    .hero-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 3em;
            color: #20252D;
            font-weight: 500;

            @media(max-width: 1200px) {
                font-size: 2.3em;
            }

            @media(max-width: 1000px) {
                font-size: 2em;
            }
        }

        div {
            background: #1E3CD1 0% 0% no-repeat padding-box;
            border-radius: 11px;
            color: #F9F9F9;
            padding: 0.9em 2.24em;
            font-weight: 600;
            font-family: 'Work Sans', sans-serif;

            @media(max-width: 1000px) {
                padding: 0.7em 2em;
            }
        }
    }
`;

const SearchBarContainer = styled.div`
    position: relative;
    bottom: 0;
    width: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000001A;
    border-radius: 11px;

    @media(max-width: 1000px) {
        width: 100%;
        position: absolute;
    }
`;

const Hero = () => (
    <HeroContainer>
        <img src={illustration} alt="topics" className="hero" /> 
        <div className="hero-text">
            <h2>
                Find all the <br />
                <strong>best events in town!</strong>
            </h2>
            <div>
                <span>Join us</span>
            </div>
        </div>
        <SearchBarContainer>
            <SearchBar />
        </SearchBarContainer>
    </HeroContainer>
);

export default Hero;
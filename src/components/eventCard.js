import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import search from '../images/search.svg';

const colors = {
    tech: "#1E3CD1",
    movies: "#D12626",
    "food/drinks": "#E5801C",
    music: "#28BFCE",
    business: "#CC48CC",
    health: "#1EE223",
    sport: "#2D2D2D"
};

const backgroundColors = {
    tech: "#A0ACE8",
    movies: "#E8A3A3",
    "food/drinks": "#F0C89F",
    music: "#A4E0E6",
    business: "#E6B1E6",
    health: "#B5F0B7",
    sport: "#A6A6A6"
};

const Card = styled.div`
    margin-bottom: 2em;
    padding: 1.1em;
    /*box-shadow: 0px 0px 16px #0000001A;*/
    border: 0.1em solid #DEDFE0;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .illustration {
        max-width: 100%;
        margin-bottom: 2%;
        cursor: pointer;
    }

    h3 {
        font-size: 1.1em;
        margin: 0;
        margin-bottom: 3%;
        margin-top: 7%;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
    }

    p {
        font-size: 0.65em;
        color: #828282;
        font-weight: 600;
    }

    .footer {
        display: grid;
        grid-template-columns: 8fr 2fr;
        align-items: center;
        .date {
            font-weight: 900;
            font-size: 0.6em;
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            .button {
                color: white;
                padding: 0.4em 0.5em;
                background: #1E3CD1 0% 0% no-repeat padding-box;
                border-radius: 8px;
                font-weight: 700;
                font-size: 0.8em;
                cursor: pointer;
            }
        }
    }
`;

const Tag = styled.span`
    background: 0% 0% no-repeat padding-box;
    border-radius: 5px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};  
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    padding: 4px 13px;
    font-size: 0.6em;
`;

const Location = styled.div`
    display: flex;
    font-size: 0.6em;
    font-family: 'Montserrat', sans-serif;
    img {
        width: 1em;
        margin-right: 1em;
    }
    font-weight: 600;
`;

const EventCard = (props) => {
    const { image, title, topic, location, description, date, id, rev } = props;
    const history = useHistory();
    return (
        <Card>
            <div>
                <img src={image} alt='title' className="illustration" />
                <Tag backgroundColor={backgroundColors[topic]} color={colors[topic]}>{topic.toUpperCase()}</Tag>
                <h3>{title}</h3>
                <Location>
                    <img src={search} alt="location" />
                    <span>{location}</span>
                </Location>
                <p>{description}</p>
            </div>
            <div className="footer">
                <span className="date">{date}</span>
                <div onClick={() => history.push({ pathname: `/events/${id}`, state: props})} className="button-container"><span className="button">GO!</span></div>
            </div>
        </Card>
    );
};

export default EventCard;
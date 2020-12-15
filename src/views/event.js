import React, { useState } from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

import clock from '../images/clock.png';
import timer from '../images/timer.png';
import marker from '../images/marker.png';
import ticket from '../images/ticket.png';

import ai from '../images/ai.png';
import laura from '../images/laura.png';
import jane from '../images/jane.png';
import zakaria from '../images/zakaria.png';
import william from '../images/william.png';
import james from '../images/james.png';
import emily from '../images/emily.png';

import { updateEvent } from '../api/events';

const avatars = [
    laura,
    zakaria,
    jane,
    william,
    james,
    emily
];

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

const Container = styled.div`
    padding-top: 1em;
    display: flex;
    flex-direction: column;
`;

const Meta = styled.div`
    display: flex;
    align-items: center;
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
    margin-right: 2em;
`;

const Hosted = styled.div`
    display: flex;

    span {
        font-weight: 600;
        margin-left: 5px;
    }
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: 800;
    margin: 0.5em 0 1em 0;
    font-family: 'Montserrat', sans-serif;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 3em;
`;

const Image = styled.div`
    img {
        border-radius: 20px;
    }
`;

const Informations = styled.div`
    font-family: 'Montserrat', sans-serif;

    h2 {
        color: #20252D;
    }

    .grid {
        border: 0.1em solid #DEDFE0;
        border-radius: 30px;
        display: grid;
        grid-template-columns 1fr 1fr;
        column-gap: 2em;
        padding: 1.5em 1em 1.5em 3em;

        .info {
            display: grid;
            column-gap: 1em;
            align-items: center;
            grid-template-columns 1fr 5fr;
            margin-bottom: 1.5em;

            span {
                color: #20252D;
                font-size: 0.8em;
                font-weight: 500;
            }
        }
    }
`;

const Attendees = styled.div`
    font-family: 'Montserrat', sans-serif;

    h2 {
        color: #20252D;
    }

    .container {
        border: 0.1em solid #DEDFE0;
        border-radius: 30px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 3em 2em;
        column-gap: 3em;
        grid-row-gap: 2em;

        .attendee {
            display: flex;
            flex-direction: column;
            align-items: center;

            .avatar {
                width: 80%;
                margin-bottom: 1em;
            }

            span {
                color: #20252D;
                font-weight: 500;
            }
        }
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-bottom: 3em;

        .button {
            cursor: pointer;
            background: #1E3CD1 0% 0% no-repeat padding-box;
            border-radius: 11px;
            color: #F9F9F9;
            padding: 0.7em 1.4em;

            span {
                font-weight: 600;
            }
        }
    }
`;

const Programme = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5%;

    h2 {
        color: #20252D;
        margin-top: 0;
    }

    div {
        /*border: 0.1em solid #DEDFE0;
        border-radius: 30px;*/
        text-align: justify;
    }
`;

const Map = styled.div`
    font-family: 'Montserrat', sans-serif;

    h2 {
        color: #20252D;
        margin-top: 0;
    }

    .leaflet-container {
        height: 290px;
        border-radius: 20px;
    }
`;

const Form = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    font-family: 'Work Sans', sans-serif;
    width: 70%;

    input {
        border-radius: 5px;
        background: white;
        padding-left: 5px;
        border: 1px solid #b1b1b1;
    }

    button {
        background: #1E3CD1 0% 0% no-repeat padding-box;
        border-radius: 11px;
        color: #F9F9F9;
        padding: 0.7em 2.24em;
        border: none;
        cursor: pointer;
    }
`;

const Event = (props) => {
    const [form, setForm] = useState({ name: "", firstName: "" });

    console.log(props.location.state)

    const { host, image, title, topic, location, gps, date, price, attendees, programme, duration, currency, id, rev } = props.location.state;
    const [attends, setAttendees] = useState(attendees);

    const handleFormChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value});
    }
    const submit = () => {
        let updatedAttendees = [];
        if (attends) {
            updatedAttendees = attends;
        }
        updatedAttendees.push(form)

        console.log(updatedAttendees)

        const data = { ...props.location.state, attendees: updatedAttendees };

        updateEvent(data).then((res) => {
            setAttendees(updatedAttendees);
        });
    }

    return (
        <Container>
            <Meta>
                <Tag backgroundColor={backgroundColors[topic]} color={colors[topic]}>
                    {topic ? topic.toUpperCase() : null}
                </Tag>
                <Hosted>
                    Hosted by: <span>{host}</span>
                </Hosted>
            </Meta>
            <Title>
                {title}
            </Title>
            <Grid>
                <div>
                    <Image>
                        <img width="100%" src={image} alt={title} />
                    </Image>
                    <Informations>
                        <h2>
                            Informations
                        </h2>
                        <div className="grid">
                            <div>
                                <div className="info">
                                    <img src={clock} width="100%" alt="time" />
                                    <span>{date}</span>
                                </div>
                                <div className="info">
                                    <img src={marker} width="100%" alt="location" />
                                    <span>{location}</span>
                                </div>
                                <div className="info" style={{ marginBottom: "0.5em" }}>
                                    <img src={ticket} width="100%" alt="price" />
                                    <span>{price > 0 ? price + "" + currency : "FREE ENTRY"}</span>
                                </div>
                            </div>
                            <div>
                                <div className="info">
                                    <img src={timer} width="100%" alt="duration" />
                                    <span>{duration}</span>
                                </div>
                            </div>
                        </div>
                    </Informations>
                    <Attendees>
                        <h2>
                            Attendees
                        </h2>
                        <div className="container">
                            {attends ?
                                <>
                                    <div className="grid">
                                        {attends.map(({ firstName, name }, index) => (
                                            <div className="attendee" key={index}>
                                                <img className="avatar" src={avatars[Math.floor(Math.random() * Math.floor(avatars.length-1))]} alt={name} />
                                                <span>{`${firstName} ${name.substring(0,1)}.`}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/*<div className="button-container">
                                        <span className="button">
                                            <span>VIEW ALL</span>
                                        </span>
                                    </div>*/}
                                </> :
                                <div style={{ padding: "10%" }}>
                                    No attendees
                                </div>
                            }
                        </div>
                    </Attendees>
                </div>
                <div>
                    <Programme>
                        <h2>
                            Programme
                        </h2>
                        <div>
                            {programme}
                        </div>
                    </Programme>
                    <Map>
                        <h2>
                            How to find us?
                        </h2>
                        <MapContainer center={gps} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </Map>
                    <Form>
                        <input type="text" name="firstName" onChange={handleFormChange} placeholder="First Name" />
                        <input type="text" name="name" onChange={handleFormChange} placeholder="Name" />
                        <button onClick={submit}>Attend</button>
                    </Form>
                </div>
            </Grid>
        </Container>
    );
}

export default Event; 
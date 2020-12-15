import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ai from '../images/ai.png';
import art from '../images/art.png';
import cakes from '../images/cakes.png';
import camera from '../images/camera.png';
import chip from '../images/chip.png';
import conf from '../images/conf.png';
import medicine from '../images/medicine.png';
import mic from '../images/mic.png';
import sport from '../images/sport.png';
import tablet from '../images/tablet.png';
import tea from '../images/tea.png';
import yoga from '../images/yoga.png';

import { getEvents } from '../api/events';

import EventCard from './eventCard';

const fakes = [
    { image: ai, title: "Conference AI", topic: "tech", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "MON 21 DEC, 2020 , 1:30 P.M" },
    { image: camera, title: "Conference Film MAKING", topic: "movies", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "TUE 22 DEC, 2020 , 2:30 P.M" },
    { image: chip, title: "Tech WORKSHOP", topic: "tech", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "MON 28 DEC, 3:30 P.M" },
    { image: tea, title: "Afternoon Tea", topic: "food/drinks", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "WED 30 DEC , 6:00 P.M" },
    { image: yoga, title: "Yoga Session", topic: "health", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "MON 28 DEC, 2020 , 6:00 P.M" },
    { image: cakes, title: "Bakery WORKSHOP", topic: "food/drinks", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "TUE 28 DEC, 2020 , 2:30 P.M" },
    { image: mic, title: "The Big Karaoke", topic: "music", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "WED 29 DEC, 9:30 P.M" },
    { image: conf, title: "Marketing Digital Conf.", topic: "business", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "THU 30 DEC , 2:30 P.M" },
    { image: medicine, title: "Data Science Conf.", topic: "health", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "FRI 1 JAN, 2020 , 9:30 A.M" },
    { image: art, title: "Contemporary Art Gallery", topic: "tech", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "SAT 2 JAN, 3:30 P.M" },
    { image: tablet, title: "Data Science Conf.", topic: "business", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "MON 4 JAN , 2:30 P.M" },
    { image: sport, title: "Crossfit Session", topic: "sport", location: "London, UK", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt", date: "THU 7 JAN , 5:00 P.M" },
];

const Container = styled.div`
    margin-top: 8%;

    .title {
        font-size: 2em;
        font-weight: 600;
    }
`;

const GridTabsContainer = styled.div`
    padding: 1em 0 1em 3em;

    @media(max-width: 1000px) {
        padding-left: 0;
    }
`;

const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2em;
    transition: grid-template-columns 1s ease-in-out;

    @media(max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents().then((res) => {
            console.log(res)
            setEvents(res.data.entries);
        });
    }, [])

    return (
        <Container>
            <span className="title">Events in London</span>
            <GridTabsContainer>
                <EventsGrid>
                    {events ? events.map((data, idx) => (
                        <EventCard key={idx} {...data} />
                    )) : null}
                </EventsGrid>
            </GridTabsContainer>
        </Container>
    ); 
}

export default Events;
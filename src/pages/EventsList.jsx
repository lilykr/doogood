import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import EventCard from '../components/EventCard'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function EventsList() {

    const { id } = useParams()
    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/events/${id}`)
            .then(res => setEvent(res.data[0]))
    }, [])

    return (
        <Box>
            <Box fontFamily='Poppins-black' fontSize="1.3em" padding="15% 5% 3% 5%"
                lineHeight="120%" color="#4BD1BE" textAlign="left">
                Découvrez tous les évènements
            </Box>
            {event.length === 0
                ? <Box fontFamily='Poppins' fontSize="1.6em" padding="50% 10% 0% 10%"
                    lineHeight="120%">Aucun évènement n'a lieu en ce moment
                  </Box>
                :
                event.filter((value, index, self) => index === self.findIndex((t) =>
                    t.charity_id === value.charity_id)).map((event, i) => (
                        <div key={i} >
                            <Link to={`/association/${id}/evenement/${event.id}`}>
                                <EventCard event={event} />
                            </Link>
                        </div>
                    ))
            }

        </Box>
    )
}

export default EventsList;
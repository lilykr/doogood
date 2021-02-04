import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import children from '../static/children.svg';
import commerce from '../static/commerce.svg';
import education from '../static/education.svg';
import grandma from '../static/grandma.svg';
import handicaped from '../static/handicaped.svg';
import homeless from '../static/homeless.svg';
import minorities from '../static/minorities.svg';


function EventCard({ event }) {
    return (
        <Box display="flex" boxShadow=" 0px 0px 22px -5px rgba(0, 0, 0, 0.16)"
            borderRadius="20px" margin="6%" height="175px">
            <Image src={event.image} alt='image association'
                maxWidth="45%" borderRadius="20px 0px 0px 20px" objectFit="cover"
            />
            <Box display="flex" flexDirection="column" padding="5%">
                <Box as="h1" fontFamily='Poppins-black' fontSize="1.1em"
                    lineHeight="120%" color="#EB5E55">{event.name}</Box>
                <Text noOfLines={4} fontSize="0.6em" textAlign="left">{event.description}</Text>
            </Box>
        </Box>
    )

}

export default EventCard;
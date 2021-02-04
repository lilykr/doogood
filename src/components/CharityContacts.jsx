import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import Map from '../static/map.svg';
import React from 'react';


function CharityContacts({ image, alt, contact }) {
    return (
        <Flex justifyContent="center">
           <img src={image} alt={alt} width="10%" />
            <Box>{contact}</Box>
        </Flex>

    )

}

export default CharityContacts;
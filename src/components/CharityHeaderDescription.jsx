import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import Map from '../static/map.svg';
import React from 'react';
import CharityContacts from './CharityContacts'


function CharityHeaderDescription({ charity }) {
    return (
        <Flex justifyContent="center">
            <Box borderBottom="1px solid #C4C4C4" width="80%">
                <Box  as="h1" fontFamily='Poppins' fontWeight="600"
                    lineHeight="120%" color="#EB5E55" marginBottom="8%">
                    {charity.charity_name}
                </Box>
                <Box borderBottom="1px solid #C4C4C4" fontFamily='Poppins' textAlign="left">{charity.address}</Box>
                <Box>
                 <CharityContacts image={Phone} alt={"phone"} contact={'0' + charity.telephone} />
                 <CharityContacts image={Letter} alt={"email"} contact={charity.email}/>
                 
                </Box>  

            </Box>
        </Flex>

    )

}

export default CharityHeaderDescription;
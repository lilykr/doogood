import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';


function CharityCard({ charity }) {
    return (
        <Box display="flex" boxShadow=" 0px 0px 22px -5px rgba(0, 0, 0, 0.16)" 
        borderRadius="20px" margin="3%">
            <Image src={charity.image} alt='image association' 
            maxWidth="50%"
            />
            <Box display="flex" flexDirection="column" padding="5%">
                <Box as="h1">{charity.name}</Box>
                <Text noOfLines={5} fontSize="0.6em">{charity.description}</Text>
            </Box>
        </Box>
    )

}

export default CharityCard;
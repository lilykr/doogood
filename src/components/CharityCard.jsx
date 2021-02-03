import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';


function CharityCard({ charity }) {
    return (
        <Box display="flex" boxShadow=" 0px 0px 22px -5px rgba(0, 0, 0, 0.16)"
            borderRadius="20px" margin="6%" height="175px">
            <Image src={charity.image} alt='image association'
                maxWidth="45%" borderRadius="20px 0px 0px 20px" objectFit="cover"
            />
            <Box display="flex" flexDirection="column" padding="5%">
                <Box as="h1" fontFamily='Poppins' fontWeight="600"
                    lineHeight="120%" color="#EB5E55" marginBottom="8%">{charity.charity_name}</Box>
                <Text noOfLines={5} fontSize="0.6em" textAlign="left">{charity.description}</Text>
            </Box>
        </Box>
    )

}

export default CharityCard;
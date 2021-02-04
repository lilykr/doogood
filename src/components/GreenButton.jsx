import { Box } from '@chakra-ui/react';
import React from 'react';



function GreenButton({ text }) {

    return (
            <Box as="button" fontFamily='Poppins-black' color="white" fontSize="1.2em"
                backgroundColor="#4BD1BE" boxShadow="0px 0px 26px -7px rgba(0, 0, 0, 0.25)"
                borderRadius="12px" marginBottom="40%"
                padding="5%">
                {text}
            </Box>
    )

}

export default GreenButton;
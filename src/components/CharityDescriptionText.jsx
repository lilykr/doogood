import { Box } from '@chakra-ui/react';
import React from 'react';


function CharityDescriptionText({ text }) {

    return (
        <Box fontFamily='Poppins' fontSize='1em' textAlign='left'>
            {text}
        </Box>
    )

}

export default CharityDescriptionText;
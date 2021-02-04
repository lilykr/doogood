import { Box } from '@chakra-ui/react';
import React from 'react';


function CharityDescriptionText({ text }) {

    return (
        <Box marginLeft="3%" marginBottom="10%" fontFamily='Poppins-regular' fontSize='1em' textAlign='left'>
            {text}
        </Box>
    )

}

export default CharityDescriptionText;
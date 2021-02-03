import { Box } from '@chakra-ui/react';
import React from 'react';


function FilterButton({ text }) {

    return (

        <Box as="button" background="#64E3D1" borderRadius="30px" 
        border="none" color="white" padding="2%" fontFamily='Poppins'
        fontSize="1em" width="fit-content" margin="2%">
            {text}
        </Box>
    )

}

export default FilterButton;
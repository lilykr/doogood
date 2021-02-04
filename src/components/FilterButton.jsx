import { Box } from '@chakra-ui/react';
import React from 'react';


function FilterButton({ text, filterCharities }) {

    return (

        <Box as="button" background="#64E3D1" borderRadius="30px" 
        border="none" color="white" padding="2%" fontFamily='Poppins'
        fontSize="1em" width="fit-content" margin="2%" borderColor="0 !important"
        key={text}
        onClick={() => filterCharities(text)}>
            {text}
        </Box>
    )

}

export default FilterButton;
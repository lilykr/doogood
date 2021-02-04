import { Box } from '@chakra-ui/react';
import React from 'react';
import '../css/FilterButtons.css';


function FilterButton({ text, filterCharities, isActive }) {
    
    return (

        <Box as="button" background="#64E3D1" borderRadius="30px" 
        border="none" color="white" padding="2%" fontFamily='Poppins'
        fontSize="0.8em" width="fit-content" margin="2%" borderColor="0 !important"
        opacity="0.8"
        className={isActive === text ? "activeFilterButton" : ""}
        key={text}
        onClick={() => filterCharities(text)}>
            {text}
        </Box>
    )

}

export default FilterButton;
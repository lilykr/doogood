import { Box, Flex } from '@chakra-ui/react';
import children from '../static/children.svg';
import commerce from '../static/commerce.svg';
import education from '../static/education.svg';
import grandma from '../static/grandma.svg';
import handicaped from '../static/handicaped.svg';
import homeless from '../static/homeless.svg';
import minorities from '../static/minorities.svg';
import React from 'react';


function CharityContacts({ image, alt, contact, handleClick }) {
    return (
        <Flex justifyContent="left">
            <Box as="button"
                variant="ghost"
                width="20%"
            >
                <img
                    width="40%"
                    onClick={alt === "phone" || alt === "email" ? () => handleClick(contact) : null}
                    src={
                        image === "children" ? children :
                            image === "commerce" ? commerce :
                                image === "education" ? education :
                                    image === "grandma" ? grandma :
                                        image === "handicaped" ? handicaped :
                                            image === "homeless" ? homeless :
                                                image === "minorities" ? minorities :
                                                    image} alt={alt} />
            </Box>
            <Box fontFamily='Poppins-regular' fontSize="0.8em">{contact}</Box>
        </Flex>

    )

}

export default CharityContacts;
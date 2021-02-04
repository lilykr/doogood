import { Box, Flex } from '@chakra-ui/react';
import children from '../static/children.svg';
import commerce from '../static/commerce.svg';
import education from '../static/education.svg';
import grandma from '../static/grandma.svg';
import handicaped from '../static/handicaped.svg';
import homeless from '../static/homeless.svg';
import React from 'react';


function CharityContacts({ image, alt, contact }) {
    console.log(image)
    return (
        <Flex justifyContent="left">
            <img src={
                image === "children" ? children :
                    image === "commerce" ? commerce :
                        image === "education" ? education :
                            image === "grandma" ? grandma :
                                image === "handicaped" ? handicaped :
                                    image === "homeless" ? homeless :
                                        image} alt={alt} width="10%" />
            <Box>{contact}</Box>
        </Flex>

    )

}

export default CharityContacts;
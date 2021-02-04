import { Box, Flex } from '@chakra-ui/react';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import React from 'react';
import CharityContacts from './CharityContacts';
import CharityDescriptionText from './CharityDescriptionText';


function CharityHeaderDescription({ charity }) {

    const handleClickPhone = (number) => {
        console.log("salut", number)
        window.open(`tel: ${number}`)
    }

    const handleClickEmail = (email) => {
        console.log("salut", email)
        window.open(`mailto: ${email}`)
    }

    return (
        <Flex justifyContent="center">
            <Box borderBottom="1px solid #C4C4C4" width="80%">
                <Box as="h1" fontFamily='Poppins' fontWeight="600"
                    lineHeight="120%" color="#EB5E55" marginBottom="8%">
                    {charity.charity_name}
                </Box>
                <Box borderBottom="1px solid #C4C4C4" fontFamily='Poppins' textAlign="left">{charity.address}</Box>
                <Box>
                    <CharityContacts image={Phone} alt={"phone"} contact={'0' + charity.telephone}
                        handleClick={handleClickPhone} />
                    <CharityContacts image={Letter} alt={"email"} contact={charity.email} handleClick={handleClickEmail} />
                    <CharityContacts image={charity.logo} alt={charity.logo} contact={charity.category_name} />
                </Box>
                <CharityDescriptionText text={charity.description} />

            </Box>
        </Flex>

    )

}

export default CharityHeaderDescription;
import { Box, Flex } from '@chakra-ui/react';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import React from 'react';
import CharityContacts from './CharityContacts';
import CharityDescriptionText from './CharityDescriptionText';
import GreenButton from './GreenButton';
import { Link } from 'react-router-dom';

function CharityContentDescription({ charity, id }) {


    const handleClickPhone = (number) => {
        window.open(`tel: ${number}`)
    }

    const handleClickEmail = (email) => {
        window.open(`mailto: ${email}`)
    }

    return (
        <Flex marginTop="41%" paddingTop="10%" width="90%" borderRadius='15px' backgroundColor="white">
            <Box>
                <Box as="h1" fontFamily='Poppins-black' fontWeight="600" fontSize="1.8em"
                    lineHeight="120%" color="#EB5E55">
                    {charity.charity_name}
                </Box>
                <Box padding="4%" marginBottom="4%" borderBottom="1px solid #C4C4C4"
                    fontFamily='Poppins-regular' fontSize="0.8em" textAlign="left">
                    {charity.address}
                </Box>
                <Box padding="4% 0% 4% 0%" marginBottom="4%" marginTop="4%" borderBottom="1px solid #C4C4C4">
                    <CharityContacts image={Phone} alt={"phone"} contact={'0' + charity.telephone}
                        handleClick={handleClickPhone} />
                    <CharityContacts image={Letter} alt={"email"} contact={charity.email} handleClick={handleClickEmail} />
                    <CharityContacts image={charity.logo} alt={charity.logo} contact={charity.category_name} />
                </Box>
                <CharityDescriptionText text={charity.description} />
                <Link to={`/association/${id}/evenement`}>
                <GreenButton text={"Évènements"} />
                </Link>
            </Box>

        </Flex>

    )
}

export default CharityContentDescription;
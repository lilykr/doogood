import React, { useEffect, useState } from 'react';
import { Box, Image, Flex } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharityContentDescription from '../components/CharityContentDescription';



function CharityDescription() {

    const { id } = useParams()
    const [charityDescription, setCharityDescription] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/associations/${id}`)
            .then(charityDes => {
                setCharityDescription(charityDes.data[0])
            })
    }, [])

    return (
        <Box>
            {charityDescription.filter((value, index, self) => index === self.findIndex((t) =>
                t.charity_id === value.charity_id)).map((charity, i) =>
                    <div key={i} >
                        <Image zIndex="-1" position="absolute" width="80%"
                        marginLeft="-50%" width="100%" height="30%" objectFit="cover" objectPosition="top"
                        src={charity.image} />
                        <Flex justify="center">
                            <CharityContentDescription charity={charity} id={id} />
                        </Flex>
                    </div>
                )}
        </Box>
    )

}

export default CharityDescription;
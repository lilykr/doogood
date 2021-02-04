import React, { useEffect, useState } from 'react';
import { Box, Image } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CharityHeaderDescription from '../components/CharityHeaderDescription'


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
                        <Image src={charity.image} />
                        <Box>
                            <CharityHeaderDescription charity={charity} />
                        </Box>
                    </div>
                )}
        </Box>
    )

}

export default CharityDescription;
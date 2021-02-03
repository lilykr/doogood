import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import FilterButton from '../components/FilterButton';
import services from '../services';
import CharityCard from '../components/CharityCard'


function CharityList() {

    const [charities, setCharities] = useState([])

    useEffect(() => {
        services.dataService.getCharities().then((_charities => {
            console.log(_charities[0])
            setCharities(_charities[0])
        }))
    }, [])

    return (
        <Box height="90vh">
            <Box display="flex" flexWrap="wrap" padding="4%" marginTop="10%"
                justifyContent="space-around">
                <FilterButton text={"Personnes âgées"} />
                <FilterButton text={"Handicap"} />
                <FilterButton text={"Enfants"} />
                <FilterButton text={"Sans abris"} />
                <FilterButton text={"Éducation"} />
            </Box>

            {charities.map(charity => (
                <div key={charity.id}>
                    <CharityCard charity={charity} />
                </div>
            ))
            }

        </Box>
    )
}

export default CharityList;
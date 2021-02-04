import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import FilterButton from '../components/FilterButton';
import services from '../services';
import CharityCard from '../components/CharityCard'


function CharityList() {

    const [charities, setCharities] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState([])

    useEffect(() => {
        services.dataService.getCharities().then((_charities => {
            setCharities(_charities[0])
            setFilteredCharities(_charities[0])
        }))
    }, [])

    const filterCharities = (value) => {
        setCharities(charities)
        let filterChar = [];
        const categories = charities.map(e => e.category_name)
        filterChar = categories.filter(charity => charity === value)
        setFilteredCharities(charities.filter(e => e.category_name === filterChar[0]));
    }

    return (
        <Box>
            <Box display="flex" flexWrap="wrap" padding="4%" marginTop="10%"
                justifyContent="space-around">
                <FilterButton text={"Personnes âgées"} filterCharities={filterCharities} />
                <FilterButton text={"Handicap"} filterCharities={filterCharities} />
                <FilterButton text={"Enfants"} filterCharities={filterCharities} />
                <FilterButton text={"Sans abris"} filterCharities={filterCharities} />
                <FilterButton text={"Éducation"} filterCharities={filterCharities} />
            </Box>

            {filteredCharities.length === 0
                ? "Aucune association ne correspond à votre recherche"
                :
                filteredCharities.filter((value, index, self) => index === self.findIndex((t) =>
                    t.charity_id === value.charity_id)).map((charity, i) => (
                        <div key={i} >
                            <CharityCard charity={charity} />
                        </div>
                    ))
            }

        </Box>
    )
}

export default CharityList;
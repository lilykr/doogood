import React, { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import FilterButton from '../components/FilterButton';
import services from '../services';
import CharityCard from '../components/CharityCard'
import { Link } from 'react-router-dom';


function CharityList() {

    const [charities, setCharities] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState([]);
    const [isActive, setIsActive] = useState("")

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
        setIsActive(value)
    }

    return (
        <Box>
            <Box display="flex" flexWrap="wrap" padding="4%"
                justifyContent="space-around">
                <FilterButton text={"Personnes âgées"} filterCharities={filterCharities} isActive={isActive} />
                <FilterButton text={"Handicap"} filterCharities={filterCharities} isActive={isActive} />
                <FilterButton text={"Enfants"} filterCharities={filterCharities} isActive={isActive} />
                <FilterButton text={"Sans abris"} filterCharities={filterCharities} isActive={isActive} />
                <FilterButton text={"Éducation"} filterCharities={filterCharities} isActive={isActive} />
            </Box>
            <Box fontFamily='Poppins-black' fontSize="1.3em" padding="5% 5% 3% 5%"
                lineHeight="120%" color="#4BD1BE" textAlign="left">
                Découvrez toutes les associations
            </Box>
            {filteredCharities.length === 0
                ? "Aucune association ne correspond à votre recherche"
                :
                filteredCharities.filter((value, index, self) => index === self.findIndex((t) =>
                    t.charity_id === value.charity_id)).map((charity, i) => (
                        <div key={i} >
                            <Link to={`/association/${charity.charity_id}/description`}>
                                <CharityCard charity={charity} image={charity.logo} alt={charity.logo} />
                            </Link>
                        </div>
                    ))
            }

        </Box>
    )
}

export default CharityList;
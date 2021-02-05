import React, { useEffect, useState } from 'react';
import { Box, Button } from "@chakra-ui/react";
import FilterButton from '../components/FilterButton';
import services from '../services';
import CharityCard from '../components/CharityCard'
import { Link } from 'react-router-dom';
import filter from '../static/filter.svg';


function CharityList() {

    const [charities, setCharities] = useState([]);
    const [filteredCharities, setFilteredCharities] = useState([]);
    const [isActive, setIsActive] = useState("")
    const [showFilters, setShowFilters] = useState(false)


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

    const handleFilters = () => {
        setShowFilters(!showFilters)
    }


    return (
        <Box>
            <Box fontFamily='Poppins' fontSize="1em" padding="15% 10% 3% 5%"
                lineHeight="120%" color="#4BD1BE" textAlign="left">
                Filtrer
                <Box as="button">
                    <img src={filter} width="25%" onClick={handleFilters} />
                </Box>
            </Box>
            {showFilters ?
                <Box display="flex" flexWrap="wrap" padding="4%"
                    justifyContent="space-around">
                    <FilterButton text={"Tous"} filterCharities={filterCharities} isActive={isActive} />
                    <FilterButton text={"Personnes âgées"} filterCharities={filterCharities} isActive={isActive} />
                    <FilterButton text={"Handicap"} filterCharities={filterCharities} isActive={isActive} />
                    <FilterButton text={"Enfants"} filterCharities={filterCharities} isActive={isActive} />
                    <FilterButton text={"Sans abris"} filterCharities={filterCharities} isActive={isActive} />
                    <FilterButton text={"Éducation"} filterCharities={filterCharities} isActive={isActive} />
                </Box>
                : null
            }
            <Box fontFamily='Poppins-black' fontSize="1.3em" padding="2% 5% 3% 5%"
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
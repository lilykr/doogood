import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import Map from '../static/map.svg';
import PhoneActive from '../static/phone-active.svg';
import LetterActive from '../static/letter-active.svg'
import MapActive from '../static/map-active.svg';
import { Flex } from "@chakra-ui/react";
import ImgNavBar from './ImgNavBar'

function NavBar() {
    const [isMapActive, setMapIsActive] = useState(false)
    const [isPhoneActive, setPhoneIsActive] = useState(false)
    const [isLetterActive, setLetterIsActive] = useState(false)

    const onClickMap = () => {
        setMapIsActive(!isMapActive)
        setPhoneIsActive(false)
        setLetterIsActive(false)
    }
    const onClickPhone = () => {
        setPhoneIsActive(!isPhoneActive)
        setMapIsActive(false)
        setLetterIsActive(false)
    }
    const onClickLetter = () => {
        setLetterIsActive(!isLetterActive)
        setPhoneIsActive(false)
        setMapIsActive(false)
    }

    return (
        <Flex paddingTop="5%" marginBottom="3%" borderTop="1px" borderColor="#C4C4C4" justifyContent="center">
            <Link to="/">
                <ImgNavBar
                 isActive={isMapActive} 
                onClick={onClickMap} 
                Image={Map}
                ImageActive={MapActive}
                alt={"map"}
                />
            </Link>
            <Link to="/associations">
            <ImgNavBar 
            isActive={isPhoneActive} 
                onClick={onClickPhone} 
                Image={Phone}
                ImageActive={PhoneActive}
                alt={"phone"}
                />
            </Link>
            <Link to="/contacts">
            <ImgNavBar 
            isActive={isLetterActive} 
                onClick={onClickLetter} 
                Image={Letter}
                ImageActive={LetterActive}
                alt={"letter"}
                />
            </Link>

        </Flex>
    )

}

export default NavBar;
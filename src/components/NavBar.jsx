import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Phone from '../static/phone.svg';
import Letter from '../static/letter.svg'
import Map from '../static/map.svg';
import PhoneActive from '../static/phone-active.svg';
import LetterActive from '../static/letter-active.svg'
import MapActive from '../static/map-active.svg';
import { Flex } from "@chakra-ui/react";
import ImgNavBar from './ImgNavBar'


function NavBar() {

    const [isActive, setIsActive] = useState("")

    const onClick = (value) => {
        setIsActive(value)
    }


    return (
        <Flex paddingTop="5%" paddingBottom="5%" marginBottom="4%" borderTop="1px" width= "100%"
            borderColor="#C4C4C4" justifyContent="center" backgroundColor="white" position="fixed">
            <Link to="/">
                <ImgNavBar
                    isActive={isActive}
                    onClick={onClick}
                    Image={Map}
                    ImageActive={MapActive}
                    alt={"map"}
                    url={"/"}
                />
            </Link>
            <Link to="/associations">
                <ImgNavBar
                    isActive={isActive}
                    onClick={onClick}
                    Image={Phone}
                    ImageActive={PhoneActive}
                    alt={"phone"}
                    url={"/associations"}
                />
            </Link>
            <Link to="/contacts">
                <ImgNavBar
                    isActive={isActive}
                    onClick={onClick}
                    Image={Letter}
                    ImageActive={LetterActive}
                    alt={"letter"}
                    url={"/contacts"}
                />
            </Link>

        </Flex>
    )

}

export default NavBar;
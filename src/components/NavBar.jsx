import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Phone from '../static/phone.svg';
import Profile from '../static/profile.svg'
import Map from '../static/map.svg';
import PhoneActive from '../static/phone-active.svg';
import ProfileActive from '../static/profile-active.svg'
import MapActive from '../static/map-active.svg';
import { Flex } from "@chakra-ui/react";
import ImgNavBar from './ImgNavBar'


function NavBar() {
    const location = useLocation()

    return (
        <Flex paddingTop="5%" paddingBottom="5%" marginBottom="4%" borderTop="1px" width= "100%"
            borderColor="#C4C4C4" justifyContent="center" backgroundColor="white" position="fixed">
            <Link to="/">
                <ImgNavBar
                    isActive={location.pathname === '/'}
                    Image={Map}
                    ImageActive={MapActive}
                    alt={"map"}
                />
            </Link>
            <Link to={`/associations`}>
                <ImgNavBar
                    isActive={location.pathname === `/associations`}
                    Image={Phone}
                    ImageActive={PhoneActive}
                    alt={"phone"}
                />
            </Link>
            <Link to="/profile">
                <ImgNavBar
                    isActive={location.pathname === '/profile'}
                    Image={Profile}
                    ImageActive={ProfileActive}
                    alt={"profile"}
                />
            </Link>

        </Flex>
    )

}

export default NavBar;
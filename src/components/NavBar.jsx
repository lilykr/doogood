import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Link } from 'react-router-dom';


function NavBar() {

    return (
        <div>
            <BottomNavigation>
                <Link to="/">
                    <BottomNavigationAction label="Recents" icon={<MapRoundedIcon color="action" style={{ fontSize: 40 }} />} />
                </Link>
                <Link to="/associations">
                    <BottomNavigationAction label="Favorites" icon={<PhoneRoundedIcon style={{ fontSize: 40 }} />} />
                </Link>
                <Link to="/contacts">
                    <BottomNavigationAction label="Nearby" icon={<EmailRoundedIcon style={{ fontSize: 40 }} />} />
                </Link>
            </BottomNavigation>
        </div>
    )

}

export default NavBar;
import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MessageIcon from '@material-ui/icons/Message';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-splat-f-logo-transparent-28.png"/>

            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook"/>
            </div>
        </div>

        <div className="header__middle">
            <div 
            className="header__option
            header__option--active">
             
                <HomeIcon fontSize="large"/>
            </div>

            <div className="header__option">
                <OndemandVideoIcon fontSize="large"/>
            </div>

            <div className="header__option">
                <PeopleIcon fontSize="large"/>
            </div>

            <div className="header__option">
                <SportsEsportsIcon fontSize="large"/>
            </div>
        </div>

        
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h5>{user.displayName}</h5>
            </div>
            <IconButton>
                <AppsIcon/>
            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsIcon/>
            </IconButton>

            <IconButton>
                <KeyboardArrowDownIcon/>
            </IconButton>


        </div>

    </div>
  )
}

export default Header



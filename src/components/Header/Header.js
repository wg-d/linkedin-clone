import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption.js";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";



function Header() {
  
  const dispatch = useDispatch()

  const logoutOfApp = ()=>{
      dispatch(logout())
      auth.signOut();

  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="./assets/icons8-linkedin-48.png"
          alt="linkedin logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Log Out" />
      </div>
    </div>
  );
  }
  
  export default Header;
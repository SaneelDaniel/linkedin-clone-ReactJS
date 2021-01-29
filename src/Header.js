import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import PeopleIcon from "@material-ui/icons/People";

function Header() {
  return (
    <div className="Header">
      <div className="header__left">
        <img
          src="https://blog.icomamerica.com/wp-content/uploads/2015/01/linkedin.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleIcon} />
      </div>
    </div>
  );
}

export default Header;

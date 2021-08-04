import React from "react";
import "./NavBar.css";
import IconButton from "../../Components/IconButton/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="icon-options-container">
        <IconButton
          icon={<HomeIcon style={{ color: "gray" }} />}
          title="Home"
        ></IconButton>
        <IconButton
          icon={<MenuBookIcon style={{ color: "gray" }} />}
          title="Read"
        ></IconButton>
        <IconButton
          icon={<BeenhereIcon style={{ color: "gray" }} />}
          title="Plans"
        ></IconButton>
        <IconButton
          icon={<OndemandVideoIcon style={{ color: "gray" }} />}
          title="Videos"
        ></IconButton>
      </div>
      <div className="account-options-container">
        <SearchIcon style={{ marginRight: "12px" }}></SearchIcon>
        <MenuIcon></MenuIcon>
      </div>
    </div>
  );
}

export default NavBar;

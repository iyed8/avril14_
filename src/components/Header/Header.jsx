import React from "react";
import "./Header.css";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
function Header() {
  return (
    <div className=" flexCenter h-wrapper">
      <div className=" Logo">Remotini</div>
      <div className=" icon-container">
        <IoIosNotificationsOutline />
        <IoSettingsOutline />
      </div>
    </div>
  );
}

export default Header;

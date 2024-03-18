import React from "react";
import "./NavBar.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
function NavBar() {
  return (
    <>
      <div className="flexCenter nav-wrapper">
        <div className="img-wrapp">
          {/* el taswira bech tji source mel bara  */}

          <img src="me&dog.jpg" alt="" />
        </div>
        <div className="name-wrapp">
          <span className="name primaryText">
            {/* name et Fmaily name java elements */}
            <span>iyed </span> <span>grassi </span>
          </span>
          <span className="secondaryText">description </span>
        </div>

        <div className="menu-wrapper">
          <div className="  nav-option">
            <IoHomeOutline />
            <button>
              <a href="">Acceuil</a>
            </button>
          </div>
          <div className="  nav-option">
            <FaChartLine />
            <button>
              <a href="">Statistique</a>
            </button>
          </div>
          <div className="  nav-option">
            <IoPersonOutline />
            <button>
              <a href="">Profile</a>
            </button>
          </div>
          <div className="  nav-option">
            <GoSignOut />
            <button>
              <a href="">Deconnecter</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

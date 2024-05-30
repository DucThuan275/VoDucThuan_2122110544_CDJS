import React from 'react'
import Logo from "../../logo-2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../index.css";
import { BsFire } from "react-icons/bs";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1 className="header_logo">Sneaker Shop</h1>
        </div>
        <nav className="nav" id="nav-menu">
          <i data-feather="x" className="close" id="close-menu"></i>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="/home" className="nav_link">
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="/gioi-thieu" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="/san-pham" className="nav_link">
                Product
              </a>
            </li>
            <li className="nav_item">
              <a href="/lien-he" className="nav_link">
                Contact
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link sale">
                SALE <BsFire />
              </a>
            </li>
          </ul>
        </nav>
        <form action="#">
          <input type="text" id="search" placeholder="Tìm kiếm" />
          <button type="submit">Tìm kiếm</button>
        </form>

        <div className="col-md-2 mt-6">
          <IoMdHeartEmpty style={{ fontSize: "30px", marginRight: "30px" }} />
          <PiShoppingCartSimple
            style={{ fontSize: "30px", marginRight: "30px" }}
          />
          <IoPersonOutline style={{ fontSize: "30px" }} />
        </div>
      </header>
      
    </div>
  )
}

export default Header

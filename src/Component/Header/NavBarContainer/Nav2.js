import React from "react";
import DownArrowWhite from "../../Images/icons/down-arrow-white.png"
const Nav2 = () => {
  return (
    <div className="container">
      <nav className="d-flex nav-container2 border ">
        <li className="nav-item text-light">
          <a className="nav-link nav-item-bg-1 pr-5 text-light" href="#">
            Shop By Catagories
            <img className="ml-3" src={DownArrowWhite} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-item-bg pr-5 text-light" href="#">
            Shop By Brands
            <img className="ml-3" src={DownArrowWhite} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            Best Seller
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            All New
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            On Sale
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            Deals & Coupons
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            Favorites
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Nav2;

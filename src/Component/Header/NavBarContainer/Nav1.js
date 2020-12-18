import React from "react";
import Logo from "../../Images/logo.png";
import LogInIcon from "../../Images/icons/login-icon.png";
import CartIcon from "../../Images/icons/cart_icon.png";
import INR from "../../Images/icons/inr.png";
import Search from "../../Images/icons/seaarch-icon.png";
const NavContainer = () => {
  return (
      <nav className="d-flex py-3 align-items-center container nav-1 ">
        <a className="navbar-brand" href="/home">
          <img src={Logo} alt="" />
        </a>
        <div class="input-group ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img src={Search} alt="" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search 10000+ Products, Brands & More"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button className="btn my-2 my-sm-0 d-flex align-items-center">
          <img className="px-2" src={LogInIcon} alt="" />
          Login/SignUp
        </button>

        <button className="btn btn-success d-flex align-items-center">
          <img className="pr-2 d-flex align-self-center" src={INR} alt="" />
          500 <img src={CartIcon} alt="" />
        </button>
      </nav>
  );
};

export default NavContainer;

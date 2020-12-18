import React from 'react';
import Logo from "../Images/logo.png"
import LocationIcon from "../Images/icons/map-location.png"
import fb from "../Images/social-icons/fb.png"
import twitter from "../Images/social-icons/twitter.png"
import insta from "../Images/social-icons/insta.png"
import youtube from "../Images/social-icons/youtube.png"
import googleplay from "../Images/icons/google-play.png"
import appstore from "../Images/icons/app-store.png"
import PaymentIcons from './PaymentIcons';

const Footer = () => {
    return (
      <div className="footer">
        <PaymentIcons />
        <div className="container">
          <div className="row py-5">
            <div className="col-md-5">
              <img src={Logo} alt="" className="mb-4" />
              <small className="d-block">
                Dear Customer, <br /> <br /> Namaskar! <br /> Unable to find a
                particular product / brand on the App. Feel free to send it via
                Chat / Whatsapp and we will make it available for you. Whatsapp
                No. 82 85 80 8282 <br />
                We are currently serving in Delhi only. <br /> Thanks, <br />{" "}
                Team Grocery Shop
              </small>
            </div>
            <div className="col-md-7 footer-detail">
              <div className="row">
                <div className="col-md-6">
                  <p>Useful Links</p>
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy </a>
                    </li>
                    <li>
                      <a href="#">Return Policy </a>
                    </li>
                    <li>
                      <a href="#">FAQ’s </a>
                    </li>
                    <li>
                      <a href="#">Contact Us </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>Reach Us</p>
                  <img src={LocationIcon} alt="" className=" mr-3" />
                  <small>
                    A-1/63 A, Paschim Vihar, New Delhi - <br /> 110022, Delhi
                  </small>
                  <p className="mt-4">Follow Us</p>
                  <a href="">
                    <img src={fb} alt="" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="">
                    <img src={insta} alt="" />
                  </a>
                  <a href="">
                    <img src={youtube} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-write ">
          <div className="container d-flex align-items-center">
            <p className="mr-auto mb-0">
              Copyright © 2019-2021 Build With Innovation Pvt Ltd.
            </p>
            <p className="mb-0 mx-3">Available on :</p>
            <img src={googleplay} className="mx-3" alt="" />
            <img src={appstore} className="mx-3" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Footer;
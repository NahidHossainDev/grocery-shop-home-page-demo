import React from 'react';
import img1 from '../Images/payment-logo/1.jpg'
import img2 from '../Images/payment-logo/2.jpg'
import img3 from "../Images/payment-logo/3.jpg";
import img4 from "../Images/payment-logo/4.jpg";
import img5 from "../Images/payment-logo/5.jpg";
import img6 from "../Images/payment-logo/6.jpg";

const logo = [img1, img2, img3, img4, img5, img6]
const PaymentIcons = () => {
    return (
        <div className="payment-icon ">
            <h6 className="d-inline-block">WE ACCEPT</h6>
            {logo.map((d,i)=> <img src={d} alt=""/> )}
        </div>
    );
};

export default PaymentIcons;
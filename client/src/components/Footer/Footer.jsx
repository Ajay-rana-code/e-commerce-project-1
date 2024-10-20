// import React from "react"

// const Footer = () =>{
//     return(
//         <div>Footer</div>
//     )
// }
// export default Footer
 

import { Link } from "react-router-dom";
 


import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">

          <h1>Categories</h1>
          <span>

          <Link to="/products/1" className="link">Men</Link>
          </span>
          <span>
          <Link to="/products/2" className="link">Women</Link>
          </span>
            <span>

          <Link to="/products/5" className="link">Child</Link>
            </span>
            <span>

          <Link to="/products/7" className="link">Accessories</Link>
            </span>
          
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          "Welcome to Trend Canvas, where creativity meets innovation!
           Our mission is to decode trends and transform ideas into reality. 
           At Trend Canvas, we're passionate about uncovering the latest trends across industries. 
           With a dedicated team of trend analysts, designers,Our canvas is a playground 
           for experimentation, ideation, and creativity.
          Join us on this journey as we explore, create, and redefine trends that shape the world we live in."
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Get in touch with us! Whether you have questions, feedback,
           or partnership inquiries, our team is here to help.
            Reach out to us via the provided 
          contact form or directly through the information below.
           We value your input and look forward to connecting with you.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Link to="/" className="link">
          <span className="logo">Trend Canvas</span>
          </Link>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <Link to="https://razorpay.com/?utm_adgroup=Stripe-Exact&utm_gclid=&utm_campaignID=18149831460&utm_adgroupID=140068216746&utm_adID=685802688133&utm_network=g&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=1007749&gad_source=1" target="_blank">
          <img src="/img/py.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

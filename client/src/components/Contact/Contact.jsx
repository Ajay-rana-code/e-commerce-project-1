import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const Contact = () => {
  return ( 
    <div className="contact">
      <div className="contact-wrapper"> 
        <span>BE IN TOUCH WITH US:</span>
        <div className="c-mail">  
            <div><input type="text" placeholder="Enter your mail..." /></div>
            <div> 
            <button>
                <Link to="/login" className="link">
                  Join Us
                </Link>
              </button>
            </div>
        </div>
        <div className="icons">
        <Link to="https://www.facebook.com/" className="link" target="_blank">
        <FacebookIcon />
                </Link>
                <Link to="https://www.instagram.com/" className="link" target="_blank">
                <InstagramIcon />
                </Link>
          
          
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;




















 
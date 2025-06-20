import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern}></img>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am available. Contact any time.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon}></img>
              <p>pgr152001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon}></img>
              <p>+91 7349170264</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon}></img>
              <p>Bangalore</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"></input>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter Your Email" name="name"></input>
             <label >Enter your  Message</label>
            <textarea rows='8' placeholder="Enter Your Message" name="message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

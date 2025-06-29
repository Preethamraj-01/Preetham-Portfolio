import "./Contact.css";
import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

 const [result, setResult] = useState(""); 

     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cc32bd4b-6591-4e84-b170-a6dbb948f9a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
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
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"></input>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter Your Email" name="name"></input>
             <label >Enter your  Message</label>
            <textarea rows='8' placeholder="Enter Your Message" name="message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
            <p className="contact-result">{result}</p> 
        </form>
      </div>
    </div>
  );
};

export default Contact;

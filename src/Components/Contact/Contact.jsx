import "./Contact.css";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cc32bd4b-6591-4e84-b170-a6dbb948f9a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <h2 className="contact-title">Contact</h2>
        <h3>Get In Touch</h3>
        <p>Feel free to reach out if you have any queries.</p>
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" /> <strong>Email:</strong>{" "}
            preethamgr7341@gmail.com
          </p>
          <p>
            <FaWhatsapp className="icon" /> <strong>WhatsApp:</strong> +91
            7349170264
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> <strong>Location:</strong>{" "}
            Bangalore, India
          </p>
        </div>

        <div className="social-media">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a
              href="https://github.com/Preethamraj-01"
              target="_blank"
              rel="noreferrer"
              className="git-hub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/g-r-preetham-212097225/"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://leetcode.com/u/Preethamraj__01/"
              target="_blank"
              rel="noreferrer"
              className="leetcode"
            >
              <i className="fa-solid fa-code"></i>
            </a>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="" className="">Your Name</label>
        <input type="text" placeholder="Enter Your Name" name="name"></input>
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder="Enter Your Email" name="name"></input>
        <label>Enter your Message</label>
        <textarea
          rows="8"
          placeholder="Enter Your Message"
          name="message"
        ></textarea>
        <button type="submit" className="contact-submit">
          Send Message
        </button>
        <p className="contact-result">{result}</p>
      </form>
    </section>
  );
};

export default Contact;

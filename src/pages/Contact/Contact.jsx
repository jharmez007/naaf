import React, { useState } from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./contact.scss";
import { createContact } from "../../services/contactServices";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    // Validate fields
    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const contact = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await createContact(contact);

      if (response?.status === 201) {
        setIsFormSubmitted(true);
      } else {
        setErrorMessage(response?.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact flex flex-col">
      <div className="flex items-center justify-center bg-[#e89611] py-6 md:py-16 px-6">
        <h3 className="font-bold p2__text text-6xl md:text-7xl text-white">
          Contact Us
        </h3>
      </div>

      <div className="app__flex flex-col-reverse lg:flex-row md:min-h-[90vh]">
        <div className="w-full h-full app__flex md:basis-1/2 p-8">
          <div className="app__flex flex-col gap-8 h-full">
            <h2 className="font-bold p__text text-4xl md:text-5xl text-center text-[#e89611]">
              Reach Out to Us
            </h2>
            <div className="app__flex flex-col gap-2">
              <p className="text-center p__text text-lg">
                13, Aro-Ade Street Isolo Lagos.
              </p>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <p className="text-center p__text text-lg">
                  naafoundation2020@gmail.com
                </p>
                <div className="app__h-div hidden lg:block" />
                <p className="text-center p__text text-lg">+234-703-875-4435</p>
              </div>
            </div>

            <div className="w-full">
              {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                  <div className="app__flex">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div className="app__flex">
                    <input
                      className="p-text"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={email}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="p-text"
                      placeholder="Your Message"
                      value={message}
                      name="message"
                      onChange={handleChangeInput}
                    />
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                  )}
                  <button
                    type="button"
                    className="bg-[#ff6501] text-white mt-8 text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-[#fcc027ce] ease-in duration-300"
                    onClick={handleSubmit}
                  >
                    {loading ? "Sending" : "Send Message"}
                  </button>
                </div>
              ) : (
                <div className="app__flex mt-12">
                  <h3 className="p2__text text-5xl md:text-7xl text-center text-[#e89611]">
                    Thank you for getting in touch!
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-[90vh] app__flex md:basis-1/2">
          <img
            className="w-full h-full object-cover"
            src={images.imgSeven}
            alt="img"
            loading="lazy"
          />
        </div>
      </div>
      <iframe 
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63430.51431842573!2d3.237517286941965!3d6.469999082484824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s13%2C%20Aro-Ade%20Street%20Isolo%20Lagos.!5e0!3m2!1sen!2sng!4v1744335763280!5m2!1sen!2sng" 
        width="100%" 
        height="450" 
        style={{ border: "0" }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div></div>

      <div className="app__flex px-6 py-8 md:py-20 bg-[#e89611]">
        <div className="app__flex flex-col text-white gap-6">
          <h4 className="font-bold p__text text-4xl md:text-5xl text-center">
            Join Us in Making a Difference Today!
          </h4>
          <Link to="/signupform">
            <button className="border-4 text-white text-sm md:text-lg py-2 px-6 md:py-4 md:px-9 rounded-md font-bold hover:bg-white hover:text-black ease-in duration-300">
              GET INVOLVED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

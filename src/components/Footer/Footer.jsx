import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../constants/dummy";
import { createSubscriber } from "../../services/subscribeServices";
import "./footer.scss";

const quickActiveLink = "p__text text-zinc-500 ";
const quickLink =
  "p__text text-zinc-500 hover:text-[#ff6501] ease-in duration-300";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { firstName, lastName, email, phone } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { phone } = formData;
    const phoneRegex = /^\d{10,14}$/;
    const formErrors = {};

    if (!phone || !phoneRegex.test(phone)) {
      formErrors.phone = "Please enter a valid phone number (10-14 digits)";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      const subscribers = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      };

      try {
        const response = await createSubscriber(subscribers);

        if (response?.status === 201) {
          setIsSubmitted(true);
          setErrorMessage(" ");
        } else {
          setErrorMessage(response?.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setErrorMessage("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row w-full p-4 md:p-10 lg:p-24 bg-white">
        <div className="w-full md:basis-1/6">
          <div className="flex flex-col gap-6 p__text text-zinc-500 md:text-sm mr-4 md:mr-0">
            <h3 className="font-bold text-black uppercase">
              NICHOLAS ADEIYE ALONGE FOUNDATION
            </h3>
            <p className="leading-7">
              Subscribe to our newsletter and be the first to receive updates, exclusive offers, and the latest news. Join our community today!
            </p>
            <div className="leading-6 flex flex-col gap-3">
              <p>
                <span className="font-bold text-black">Email: </span>
                naafoundation2020@gmail.com
              </p>
              <p>
                <span className="font-bold text-black">Phone: </span>
                +234-703-875-4435
              </p>
              <p>
                <span className="font-bold text-black">Address: </span>13, Aro-Ade Street Isolo Lagos.
              </p>
            </div>
          </div>
        </div>

        <div className="app__flex w-full md:basis-4/6 py-10 md:py-4 gap-3">
          <div className="app__flex flex-col gap-3">
            <p className="font-bold text-black">
              Get our emails to stay in the know.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-xs">First Name</p>
                  <input
                    className="app__input"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs">Last Name</p>
                  <input
                    className="app__input"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Email</p>
                <input
                  className="app__input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Phone</p>
                <input
                  className="app__input"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChangeInput}
                  required
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <div className="app__flex mt-4">
                <button
                  className={`bg-[#ff6501] py-1 px-6 rounded-md p__text font-bold text-white w-36 ${
                    isSubmitted
                      ? "bg-green-500"
                      : "hover:bg-[#fcc027ce] ease-in duration-300"
                  }`}
                  type="submit"
                  disabled={isSubmitted}
                >
                  {isSubmitted
                    ? "Subscribed"
                    : loading
                    ? "Processing"
                    : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full md:basis-1/6 ">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <NavLink
                to={`/${item.link}`}
                className={({ isActive }) =>
                  isActive ? quickActiveLink : quickLink
                }
                key={`link-${item.name}`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#e89611] w-full p-2 app__flex text-white text-sm">
        <p>{`@ ${new Date().getFullYear()} NAAF. All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Footer;

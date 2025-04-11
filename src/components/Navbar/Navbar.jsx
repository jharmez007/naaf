import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { links } from "../../constants/dummy";
import { images } from "../../constants";
import "./navbar.scss";
import { getAllContacts } from "../../services/contactServices";

const activeLink = "p__text text-zinc-500 font-bold";
const normalLink =
  "p__text text-black hover:text-zinc-500 ease-in duration-300 font-bold";
const menuActiveLink = "p__text text-[#ff6501] font-bold";
const menuLink =
  "p__text text-black hover:text-[#ff6501] ease-in duration-300 font-bold";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const goToAboutSection = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile screen size, go to Section 1
      navigate("/support#donate");
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      // Tablet screen size, go to Section 2
      navigate("/support#donate1");
    } else {
      // Desktop screen size, go to Section 3
      navigate("/support#donate1");
    }
  };

  useEffect(() => {
    const getContacts = async () => await getAllContacts();

    getContacts();
  }, []);

  return (
    <div className="fixed app__flex flex-col md:flex-row bg-white min-h-20 w-full z-[999]">
      <div className="flex items-center justify-between md:justify-center w-full lg:basis-11/12 md:basis-10/12 px-4 py-2">
        <div className="app__flex basis-1/12">
          <Link to="/home">
            <div className="w-16 h-16">
              <img src={images.logo} alt="logo" className="w-full h-full" />
            </div>
          </Link>
        </div>

        <div className="gap-6 basis-10/12 hidden md:flex justify-center items-center">
          {links.map((item) => (
            <NavLink
              to={`/${item.link}`}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              key={`link-${item.name}`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="app__navbar-menu md:hidden">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="motion__div z-[999]"
            >
              <HiX onClick={() => setToggle(false)} />
              <div className="app__flex small__menu gap-6">
                {links.map((item) => (
                  <NavLink
                    to={`/${item.link}`}
                    className={({ isActive }) =>
                      isActive ? menuActiveLink : menuLink
                    }
                    key={`link-${item.name}`}
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <button
        onClick={goToAboutSection}
        className="w-full py-4 md:h-20 md:basis-2/12 lg:basis-1/12 bg-[#ff6501] hover:bg-[#e89611c0] ease-in duration-300 font-bold text-xl md:text-2xl text-white"
      >
        Donate
      </button>
    </div>
  );
};

export default Navbar;

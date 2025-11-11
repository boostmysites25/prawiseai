import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { logo } from "../../constants";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="fixed z-40 top-0 left-0 w-full">
      <div className="border-b border-white/10 bg-[#04040f]/85 backdrop-blur-xl">
        <div className="wrapper flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <ScrollLink
              to="banner"
              spy
              smooth
              duration={500}
              className="cursor-pointer"
            >
              <img
                fetchPriority="high"
                src={logo}
                alt="Prawise AI"
                width="150"
                height="60"
                className="w-[11rem] sm:w-[13rem] object-contain"
              />
            </ScrollLink>
            <button
              title="Menu"
              className="block lg:hidden justify-self-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger
                color="#ffffff"
                size={24}
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </button>
          </div>
          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-white/80 lg:flex w-full justify-end">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link to="/about-us" className="transition-colors hover:text-white">
              About
            </Link>
            <ScrollLink
              to="services"
              spy
              smooth
              duration={500}
              offset={-40}
              className="cursor-pointer transition-colors hover:text-white"
              activeClass="text-white font-semibold"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              spy
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer transition-colors hover:text-white"
              activeClass="text-white font-semibold"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy
              smooth
              duration={500}
              offset={-70}
              className="rounded-full border border-white/40 px-5 py-2 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-[#04040f]"
            >
              Talk to us
            </ScrollLink>
          </div>
          
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[3rem] object-contain"
          />
          <button
            title="Close"
            onClick={() => setIsOpen(false)}
            className="  text-[2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Navigate
          </p>
          <ScrollLink
            to="banner"
            onClick={() => setIsOpen(false)}
            spy
            smooth
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Home
          </ScrollLink>
          <Link to="/about-us" className="text-2xl font-medium link" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <ScrollLink
            to="services"
            onClick={() => setIsOpen(false)}
            spy
            smooth
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            onClick={() => setIsOpen(false)}
            spy
            smooth
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Contact Us
          </ScrollLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;

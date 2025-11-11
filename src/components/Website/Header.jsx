import React from "react";
import { Link, useLocation } from "react-router-dom";
import { clientDetails, logo, websitePagesLinks } from "../../constants";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const primaryLinks = [
    ...websitePagesLinks,
    { id: "about", title: "About", link: "/about-us" },
    { id: "insights", title: "Insights", link: "/blogs" },
  ];

  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <div className="border-b border-white/10 bg-[#04040f]/80 backdrop-blur-2xl">
        <div className="wrapper flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex justify-between items-center">
            <Link to="/" aria-label="Prawise AI home" className="w-fit">
              <img
                fetchPriority="high"
                src={logo}
                alt="Prawise AI"
                width="180"
                height="56"
                className="w-[11rem] md:w-[14rem] object-contain"
              />
            </Link>
            <button
              title="Open menu"
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

          <div className="hidden lg:flex w-full justify-end items-center">
            <nav className="flex items-center gap-7 text-sm uppercase tracking-[0.18em] text-white/80">
              {primaryLinks.map(({ id, link, title }) => (
                <Link
                  key={id}
                  to={link}
                  className={`transition-colors duration-200 hover:text-white ${
                    pathname === link ? "text-white font-semibold" : ""
                  }`}
                >
                  {title}
                </Link>
              ))}
            <div className="flex w-fit items-center gap-6">
              <Link to="/contact-us" className="primary-btn rounded-full">
                Book Strategy Call
              </Link>
            </div>
            </nav>
          </div>

          <div className="lg:hidden text-xs tracking-[0.24em] uppercase text-white/60">
            We design intelligent products & experiences
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-50 p-3"
      >
        <div className="mb-6 flex items-center justify-between pr-2">
          <img
            loading="lazy"
            src={logo}
            alt="Prawise AI"
            className="h-[3rem] object-contain"
          />
          <button
            title="Close menu"
            onClick={() => setIsOpen(false)}
            className="text-3xl"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-5 px-3 pb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Navigation
          </p>
          {primaryLinks.map(({ id, link, title }) => (
            <Link
              key={id}
              to={link}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-[#04040f]"
            >
              {title}
            </Link>
          ))}
          <hr className="border-[#04040f]/10" />
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Let’s build together
          </p>
          <Link
            to={`tel:${clientDetails.phone}`}
            className="text-lg font-medium text-[#04040f]"
          >
            {clientDetails.phone}
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="secondary-btn rounded-full"
          >
            Contact Team
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

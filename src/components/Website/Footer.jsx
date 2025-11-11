import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { allServices, clientDetails, logo } from "../../constants";

const socialLinks = [
  {
    icon: <FaLinkedinIn className="text-xl" />,
    href: "https://www.linkedin.com/company/prawiseai",
    label: "LinkedIn",
  },
  {
    icon: <AiFillInstagram className="text-2xl" />,
    href: "https://www.instagram.com/prawiseai",
    label: "Instagram",
  },
  {
    icon: <GrFacebookOption className="text-2xl" />,
    href: "https://www.facebook.com/prawiseai",
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#04040f] text-white pt-16 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blurred-red-circle left-[-8rem] top-[-6rem] h-[18rem] w-[18rem] bg-primary/40"></div>
        <div className="blurred-red-circle right-[-6rem] bottom-[-8rem] h-[22rem] w-[22rem] bg-secondary/30"></div>
      </div>
      <div className="wrapper relative z-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)_minmax(0,0.6fr)]">
        <div className="flex flex-col gap-5 max-w-[24rem]">
          <Link to="/" aria-label="Prawise AI home">
            <img
              src={logo}
              width="180"
              height="60"
              alt="Prawise AI"
              className="w-[11.5rem] object-contain"
            />
          </Link>
          <p className="text-white/70 text-base leading-relaxed">
            We pair human insight with intelligent technology to design products, platforms, and AI systems that advance ambitious teams.
          </p>
          <div className="flex items-center gap-5 pt-2">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:border-white hover:-translate-y-1"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Services
          </p>
          <div className="grid gap-3 text-white/80">
            {allServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                className="transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Visit
            </p>
            <p className="mt-2 text-white/80 leading-relaxed">
              {clientDetails.address}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-white/80">
            <a href={`mailto:${clientDetails.email}`} className="transition-colors hover:text-white">
              {clientDetails.email}
            </a>
            <a href={`tel:${clientDetails.phone}`} className="transition-colors hover:text-white">
              {clientDetails.phone}
            </a>
            <Link to="/contact-us" className="tertiary-btn rounded-full w-fit !px-6">
              Start a project
            </Link>
          </div>
          <div className="grid gap-2 text-white/60 text-sm uppercase tracking-[0.2em]">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/blogs" className="hover:text-white transition-colors">
              Insights
            </Link>
            <Link to="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Prawise AI. All rights reserved.</p>
        <p>Crafted with curiosity in San Francisco & Bengaluru.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails, logo } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-[#04040f] py-10 text-white">
      <div className="wrapper flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-4">
          <img
            fetchPriority="high"
            src={logo}
            alt="Prawise AI"
            width="150"
            height="60"
            className="h-[3.5rem] object-contain"
          />
          <p className="text-white/70 max-w-sm text-sm leading-relaxed">
            We co-create intelligent products with teams who value craft, curiosity, and clear results.
          </p>
          <div className="flex gap-4 pt-2">
            {[
              {
                href: "https://www.linkedin.com/company/prawiseai",
                icon: <FaLinkedinIn className="text-xl" />,
                label: "LinkedIn"
              },
              {
                href: "https://www.instagram.com/prawiseai",
                icon: <AiFillInstagram className="text-2xl" />,
                label: "Instagram"
              },
              {
                href: "https://www.facebook.com/prawiseai",
                icon: <GrFacebookOption className="text-2xl" />,
                label: "Facebook"
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:-translate-y-1 hover:border-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Contact
          </span>
          <a href={`mailto:${clientDetails.email}`} className="text-white/80 transition-colors hover:text-white">
            {clientDetails.email}
          </a>
          <a href={`tel:${clientDetails.phone}`} className="text-white/80 transition-colors hover:text-white">
            {clientDetails.phone}
          </a>
          <p className="text-white/80 max-w-xs">{clientDetails.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

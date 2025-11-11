import React, { useState } from "react";
import { allServices } from "../constants";
import { Link, useLocation } from "react-router-dom";

const HomePageServicesList = () => {
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const { pathname } = useLocation();

  // set active service
  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };
  return (
    <section className="wrapper py-20">
      {!pathname.includes("/services") && (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            Capabilities
          </p>
          <h3 className="heading max-w-4xl leading-tight">
            Four studios working in sync to ship intelligent digital products
          </h3>
          <p className="description max-w-3xl text-[#2d2d2d]/80">
            Pick a discipline or engage a blended squad. Either way, you get
            product strategists, designers, engineers, and AI experts focused on
            outcomes that matter.
          </p>
        </div>
      )}
      <div className="mt-14 grid items-stretch gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:p-10">
        <div
          data-aos="fade-up"
          className="flex h-full flex-col gap-4 rounded-3xl bg-[#f5f7ff] p-6"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary/80">
            Choose a studio
          </p>
          <div className="mt-2 flex flex-col gap-3">
            {allServices.map((item) => (
              <button
                key={item.slug}
                onClick={() => handleServiceSelect(item)}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  item.id === selectedService.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-[#04040f] hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-6 rounded-3xl bg-[#04040f] p-6 text-white lg:p-10"
        >
          <div className="grid gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Service overview
            </p>
            <h4 className="text-3xl font-semibold leading-tight">
              {selectedService.title}
            </h4>
            <p className="text-white/70 leading-relaxed">
              {selectedService.smallPara}
            </p>
          </div>
          <img
            width="500"
            height="320"
            src={selectedService.img1}
            className="aspect-video w-full rounded-2xl object-cover"
            alt={selectedService.title}
            loading="lazy"
          />
          <ul className="grid gap-3">
            {selectedService.keyBenefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="mt-[0.5rem] inline-flex h-[0.65rem] w-[0.65rem] flex-shrink-0 rounded-full bg-secondary"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to={`/services/${selectedService.slug}`}
            className="mt-6 w-fit rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-[#04040f]"
          >
            View service blueprint
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageServicesList;

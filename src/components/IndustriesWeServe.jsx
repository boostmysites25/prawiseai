import React from "react";
import { industriesCompanyServe } from "../constants";

const IndustriesWeServe = () => {
  return (
    <section className="py-20">
      <div className="wrapper flex flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            Industries we elevate
          </p>
          <h2 data-aos="fade-up" className="heading mt-3 leading-tight">
            Sector expertise grounded in outcomes, not buzzwords
          </h2>
          <p data-aos="fade-up" className="description mt-4 text-[#2d2d2d]/80">
            We bring product, AI, and data craftsmanship to regulated enterprises, growth-stage disruptors, and mission-driven organizations across the globe.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industriesCompanyServe.map((item) => (
            <article
              key={item.id}
              data-aos="fade-up"
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#04040f]/10 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04040f]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-5 left-5 rounded-full bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur">
                  {item.title}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-sm leading-relaxed text-[#2d2d2d]/75">
                  {item.desc}
                </p>
                <span className="mt-auto text-xs uppercase tracking-[0.3em] text-primary">
                  Advisory · Design · Build
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

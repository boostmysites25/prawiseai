import React from "react";
import { appPortfolio, webPortfolio } from "../constants";

const Portfolio = ({ page }) => {
  let portfolio;
  if (page) {
    const isWebDevelopment = Boolean(page === "web-development");
    portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  } else {
    portfolio = [...webPortfolio, ...appPortfolio];
  }
  return (
    <section id="portfolio" className="relative py-20">
      <div className="blue-bg-shape -z-10 right-3 top-[2rem] rotate-[-45deg]"></div>
      <div className="blurred-red-circle -z-10 left-[-2rem] bottom-[-2rem] h-[25rem] w-[25rem]"></div>
      <div className="wrapper flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            Recent launches
          </p>
          <h2 className="heading max-w-4xl leading-tight">
            Products we’ve recently brought to market
          </h2>
          <p className="description max-w-3xl text-[#2d2d2d]/80">
            From venture-backed MVPs to enterprise platforms, these collaborations show how we blend human-centered design with resilient technology stacks.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article
              data-aos="fade-up"
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-[#04040f]/10 bg-white shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04040f]/80 via-transparent to-transparent opacity-80"></div>
                <span className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-col gap-4 px-6 py-8">
                <h3 className="text-2xl font-semibold text-[#04040f]">
                  {item.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.25em] text-[#04040f]/50">
                  Product strategy · Design · Build
                </p>
                <button className="w-fit rounded-full border border-[#04040f]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#04040f] transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary group-hover:text-primary">
                  View case study
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

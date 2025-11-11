import React from "react";
import icon1 from "../assets/icons/successful-projects.png";
import icon2 from "../assets/icons/happy-customer.png";
import icon3 from "../assets/icons/tech-expert.png";
// import icon4 from "../assets/icons/industries.png";
import CountUp from "react-countup";

const TrustWorthySection = () => {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mx-auto max-w-4xl text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            Proof in the results
          </p>
          <h2 data-aos="fade-up" className="heading mt-4 leading-tight">
            A cross-disciplinary team obsessed with measurable impact
          </h2>
          <p
            data-aos="fade-up"
            className="description mt-4 text-[#2d2d2d]/80"
          >
            Product strategists, designers, engineers, and data scientists work as one squad. We partner long-term, stay accountable to the numbers, and celebrate every customer win.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="mt-16 grid gap-6 rounded-[2rem] bg-[#04040f] p-8 text-white md:grid-cols-3"
        >
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-5xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy duration={3} end={3} suffix="+" />
              </h3>
              <div className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-white/15">
                <img
                  src={icon1}
                  className="w-[3rem] object-contain"
                  alt="Years in market"
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Years building digital products
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-5xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy duration={4} end={140} suffix="+" />
              </h3>
              <div className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-white/15">
                <img
                  src={icon2}
                  className="w-[3rem] object-contain"
                  alt="Shipped launches"
                />
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Digital launches shipped globally
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-5xl font-semibold">
                <CountUp scrollSpyOnce enableScrollSpy duration={4} end={25} suffix="+" />
              </h3>
              <div className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-white/15">
                <img
                  src={icon3}
                  className="w-[3rem] object-contain"
                  alt="Expert team"
                />
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">
              Multi-disciplinary experts on the team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustWorthySection;

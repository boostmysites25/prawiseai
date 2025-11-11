import React from "react";
import { workingProcess } from "../constants";

const WorkingProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f5ff] py-20">
      <div className="wrapper flex flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            How we work
          </p>
          <h2 className="heading mt-4 leading-tight">
            A collaborative framework that turns vision into shipped products
          </h2>
          <p className="description mt-4 text-[#2d2d2d]/80">
            Every engagement follows a proven rhythm. We align on outcomes, design experiences people love, ship iteratively, and stay close to data to unlock the next opportunity.
          </p>
        </div>
        <div className="relative grid gap-8 md:grid-cols-4">
          {workingProcess.map((process, index) => (
            <div
              data-aos="fade-up"
              key={process.id}
              className="relative flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary/60">
                Step {index + 1}
              </span>
              <img
                loading="lazy"
                src={process.img}
                alt={process.title}
                className="h-[6rem] w-auto object-contain"
              />
              <h3 className="text-xl font-semibold text-[#04040f]">
                {process.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#2d2d2d]/80">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;

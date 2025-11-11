import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="wrapper relative my-20 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary px-8 py-16 text-white shadow-xl">
      <div className="absolute inset-0 opacity-30">
        <div className="blurred-red-circle left-[-6rem] top-[-4rem] h-[15rem] w-[15rem] bg-white/30"></div>
        <div className="blurred-red-circle right-[-8rem] bottom-[-6rem] h-[20rem] w-[20rem] bg-black/20"></div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <p className="uppercase tracking-[0.3em] text-white/60 text-xs md:text-sm">
          Let’s build what’s next
        </p>
        <h2 className="heading text-balance leading-tight">
          Ready to launch your next intelligent product?
        </h2>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          We partner with ambitious teams to deliver web platforms, mobile apps, and AI-powered systems that unlock new growth. Share your challenge and we’ll show you the path forward.
        </p>
        <Link
          to="/contact-us"
          className="rounded-full bg-white px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#04040f] transition-all duration-200 hover:-translate-y-1 hover:bg-white/90"
        >
          Schedule a strategy session
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

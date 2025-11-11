import React from "react";
import bgImg from "../assets/testimonial-bg.png";
import { useKeenSlider } from "keen-slider/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { testimonials } from "../constants";

const animation = { duration: 30000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 30,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 769px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1550px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <section
      className="relative mt-24 mb-24 overflow-hidden bg-[#04040f] py-20 text-white"
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="absolute inset-0">
        <div className="blurred-red-circle left-[-12rem] top-[20%] h-[20rem] w-[20rem] bg-primary/40"></div>
        <div className="blurred-red-circle right-[-10rem] bottom-[10%] h-[22rem] w-[22rem] bg-secondary/30"></div>
      </div>
      <div className="wrapper relative z-10 flex flex-col gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-white/50">
            Partnerships
          </p>
          <h2 className="heading mt-4 leading-tight">
            Teams that co-create with us feel the difference
          </h2>
          <p className="mt-3 text-white/70">
            Product, engineering, data, and leadership teams count on us to accelerate outcomes and build lasting capability inside their organizations.
          </p>
        </div>
        <div data-aos="fade-left" ref={sliderRef} className="keen-slider">
          {testimonials.concat(testimonials).map(({ id, title, name, description }) => (
            <div key={id} className="keen-slider__slide">
              <div className="mx-2 flex h-full flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
                <div className="flex items-center justify-between text-white/50">
                  <span className="text-xs uppercase tracking-[0.3em]">
                    Verified Partner
                  </span>
                  <RiDoubleQuotesR className="text-5xl text-white/10" />
                </div>
                <p className="text-lg leading-relaxed text-white/90">“{description}”</p>
                <div>
                  <p className="text-base font-semibold text-white">{name}</p>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

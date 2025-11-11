import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-24 pb-16">
        <div className="blurred-red-circle -z-10 left-[-10rem] top-[-10rem] h-[25rem] w-[25rem]"></div>
        <div className="wrapper grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
          <div className="flex flex-col gap-6">
            <p data-aos="fade-down" className="uppercase text-xs tracking-[0.3em] text-primary">
              About Prawise AI
            </p>
            <h3 data-aos="fade-right" className="heading leading-tight">
              We are the product, engineering, and AI studio ambitious teams call first
            </h3>
            <p data-aos="fade-right" className="description text-[#2d2d2d]/80">
              Prawise AI was founded to help organizations build the digital experiences their customers deserve. Our squads combine research, design, full-stack engineering, and data science to move from vision to launch—without the silos or guesswork.
            </p>
            <div data-aos="fade-right" className="grid gap-3 text-sm uppercase tracking-[0.3em] text-[#04040f]/60 md:grid-cols-2">
              <span>North America · Europe · India delivery hubs</span>
              <span>Integrated AI, product, and platform expertise</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              data-aos="fade-left"
              loading="lazy"
              src={aboutImg}
              alt="Prawise AI studio"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="rounded-2xl border border-[#04040f]/10 bg-white/70 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                What we believe
              </p>
              <p className="mt-3 text-[#04040f]/80">
                Technology should elevate people. We design systems that feel human, scale gracefully, and deliver measurable outcomes from launch day onward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section className="relative py-16">
        <div className="blurred-red-circle -z-10 left-[60%] top-[-8rem] h-[20rem] w-[20rem]"></div>
        <div className="wrapper grid gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl md:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] md:p-10">
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <p className="uppercase text-xs tracking-[0.3em] text-primary">
              Intelligence woven in
            </p>
            <h3 className="heading leading-tight">
              AI isn’t a feature—it's the operating system for modern products
            </h3>
            <p className="description text-[#2d2d2d]/80">
              We design AI-enabled experiences that feel intuitive, performant, and trustworthy. From recommendation engines to conversational copilots, we center transparency and measurable ROI in everything we deliver.
            </p>
            <ul className="grid gap-3 text-sm text-[#04040f]/70">
              <li>• Responsible AI frameworks that keep ethics front-and-center</li>
              <li>• Integrated data strategy to feed, monitor, and scale models</li>
              <li>• Product design that blends automation with human oversight</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <img
              data-aos="fade-left"
              loading="lazy"
              src={aboutImg2}
              alt="AI collaboration"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="wrapper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 py-[5rem] md:grid-cols-[0.3fr_0.7fr]">
          <div className="flex w-full flex-col overflow-hidden rounded-ss-[3rem] rounded-ee-[3rem] md:aspect-[3/4]">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
              loading="lazy"
              alt="ceo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="uppercase text-xs tracking-[0.3em] text-primary">
              From our founder
            </p>
            <h3 className="heading">
              “We help teams build with confidence and launch with momentum.”
            </h3>
            <p className="description text-[#2d2d2d]/80">
              “Prawise AI exists to help visionary teams move faster with clarity. We partner deeply, listen intentionally, and build products that create advantage from day one. Let’s co-create the future you imagine.”
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-[#04040f]/60">
              — Praveen Sharma, Founder & CEO
            </p>
          </div>
        </div>
      </section>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);

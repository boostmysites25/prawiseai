import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"Inside Prawise AI"}
        banner={bannerImg}
        description="We are a collective of strategists, designers, engineers, and data scientists building intelligent products that help our partners lead their markets."
      />
      <section className="wrapper grid gap-12 py-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="flex flex-col gap-6">
          <p data-aos="fade-right" className="uppercase text-xs tracking-[0.3em] text-primary">
            Our story
          </p>
          <h1 data-aos="fade-right" className="heading leading-tight">
            Building the studio we wished existed when shipping products at scale
          </h1>
          <p data-aos="fade-right" className="description text-[#2d2d2d]/80">
            Prawise AI emerged from a simple insight: ambitious teams need a partner who can marry strategy with flawless execution. We bring empathy for end-users, obsession with measurable outcomes, and a love for difficult problems.
          </p>
          <ul data-aos="fade-right" className="grid gap-3 text-sm text-[#04040f]/70">
            <li>• Cross-functional pods aligned to your roadmap and outcomes</li>
            <li>• Deep platform, mobile, and AI specialization under one roof</li>
            <li>• Delivery centers in San Francisco, Bengaluru, and Berlin</li>
          </ul>
        </div>
        <div
          data-aos="fade-left"
          className="relative h-full w-full overflow-hidden rounded-[2.5rem]"
        >
          <img
            loading="lazy"
            src={img1}
            alt="Prawise AI team at work"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-2 rounded-2xl bg-white/80 p-5 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Key metrics</span>
            <p className="text-lg font-semibold text-[#04040f]">60+ launches · 12 countries · 95% retention</p>
          </div>
        </div>
      </section>

      <section className="wrapper py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="flex flex-col gap-6">
            <p data-aos="fade-right" className="text-sm uppercase tracking-[0.3em] text-primary">
              How we’ve grown
            </p>
            <h2 data-aos="fade-right" className="heading leading-tight">
              From a small collective to a global studio trusted by leaders
            </h2>
            <p data-aos="fade-right" className="description text-[#2d2d2d]/80">
              We began in 2016 as a lean crew helping startups ship their first products. Today we operate across three continents, partnering with scale-ups and enterprises to modernize platforms, launch new ventures, and integrate AI responsibly.
            </p>
            <p data-aos="fade-right" className="description text-[#2d2d2d]/80">
              Our squads stay embedded with clients through discovery, launch, and growth. We pride ourselves on building capability inside your teams while delivering measurable results.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              {
                year: "2016",
                headline: "Studio founded",
                details: "Prawise AI launches with a focus on human-centered product strategy."
              },
              {
                year: "2019",
                headline: "Global expansion",
                details: "Opened hubs in Bengaluru and Berlin, adding AI and data science practices."
              },
              {
                year: "2023",
                headline: "AI-first acceleration",
                details: "Introduced dedicated AI lab helping teams harness generative and predictive capabilities."
              }
            ].map((item) => (
              <div key={item.year} data-aos="fade-up" className="rounded-2xl border border-[#04040f]/10 bg-white p-5 shadow-md">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">{item.year}</span>
                <h3 className="mt-2 text-lg font-semibold text-[#04040f]">{item.headline}</h3>
                <p className="mt-2 text-sm text-[#2d2d2d]/80">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrapper grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="rounded-[2.5rem] bg-[#04040f] px-8 py-10 text-white shadow-xl">
            <h2 data-aos="fade-up" className="heading">
              Principles that shape every partnership
            </h2>
            <div className="mt-8 grid gap-6">
              {[
                {
                  id: 1,
                  title: "Outcome over output",
                  desc: "We measure success by business impact, not feature checklists. Every sprint is tied to clear signals."
                },
                {
                  id: 2,
                  title: "Human-centered intelligence",
                  desc: "AI should empower people. We design experiences that keep humans in control and amplify their capabilities."
                },
                {
                  id: 3,
                  title: "Radical transparency",
                  desc: "We work in the open, share the data, and make decisions together. No black boxes, no surprises."
                },
                {
                  id: 4,
                  title: "Learn fast, adapt faster",
                  desc: "We experiment, analyze, and iterate relentlessly to keep products relevant in rapidly evolving markets."
                },
              ].map((item) => (
                <div key={item.id} data-aos="fade-up" className="border-l border-white/20 pl-5">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {[
              {
                id: 1,
                img: mission,
                title: "Our mission",
                desc: "Enable organizations to bring bold ideas to market with intelligent technology, modern craft, and measurable outcomes."
              },
              {
                id: 2,
                img: vision,
                title: "Our vision",
                desc: "Be the go-to partner for teams who refuse to accept average digital experiences and seek lasting innovation."
              },
            ].map((item) => (
              <div
                key={item.id}
                data-aos="fade-up"
                className="flex flex-col gap-4 rounded-[2rem] border border-[#04040f]/10 bg-white p-7 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[7rem] w-auto object-contain"
                />
                <h3 className="text-xl font-semibold text-[#04040f] uppercase tracking-[0.2em]">
                  {item.title}
                </h3>
                <p className="text-[#2d2d2d]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;

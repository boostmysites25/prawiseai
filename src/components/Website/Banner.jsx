import React, { useEffect } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
    });

    // Add hover event listeners to pause and resume animation
    const robotElement = document.getElementById("robot");

    const handleMouseEnter = () => {
      tl.pause(); // Pause animation on hover
    };

    const handleMouseLeave = () => {
      tl.resume(); // Resume animation when hover ends
    };

    robotElement.addEventListener("mouseenter", handleMouseEnter);
    robotElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill(); // Clean up animation
      robotElement.removeEventListener("mouseenter", handleMouseEnter);
      robotElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section id="banner" className="relative min-h-screen banner">
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        pip={false}
        playbackRate={0.4}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noplaybackrate",
              disablePictureInPicture: true,
              playsinline: true,
            },
          },
        }}
        controls={false}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#04040f]/90"></div>
      <div className="absolute inset-0">
        <div className="blurred-red-circle h-[22rem] w-[22rem] left-[-12rem] top-[18%] bg-primary/30"></div>
        <div className="blurred-red-circle h-[18rem] w-[18rem] right-[-8rem] top-[10%] bg-secondary/30"></div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full items-center">
        <div className="wrapper w-full grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <div className="flex flex-col gap-6 text-white">
           
            <h1 className="heading-1 max-w-4xl leading-tight">
              Build intelligent products that move your business forward
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              From strategy to ship, we blend full-stack engineering, AI innovation, and product design to launch experiences customers love and teams can scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us" className="primary-btn rounded-full">
                Start a project
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-white hover:text-[#04040f]"
              >
                Explore services
              </Link>
            </div>
            <div className="grid gap-6 text-sm uppercase tracking-[0.2em] text-white/60 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-white">+60</p>
                <p>Product launches</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Global</p>
                <p>Delivery footprint</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Always-on</p>
                <p>Innovation partner</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <Link to="/contact-us" id="robot" className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-primary/40 rounded-full"></div>
              <img
                src={robot}
                className="w-[15rem] object-contain"
                alt="Futuristic assistant illustration"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

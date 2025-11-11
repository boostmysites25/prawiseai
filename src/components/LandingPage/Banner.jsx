import React, { useEffect, useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";
import bannerThumb from "../../assets/vids/banner-thumb.webp";
import { Link } from "react-scroll";

const Banner = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const [isVideoLoaded, setVideoLoaded] = useState(false);

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
    <div id="banner" className="h-screen banner relative">
      {!isVideoLoaded && (
        <img
          src={bannerThumb}
          alt=""
          loading="lazy"
          width="800"
          height="800"
          className="w-full h-full object-cover"
        />
      )}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        onReady={() => setVideoLoaded(true)}
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/70 to-[#04040f]/90"></div>
      <div className="w-full absolute left-0 top-0 h-full">
        <div className="wrapper h-full grid md:grid-cols-[55%_auto] items-center md:gap-10">
          <div className="flex w-full flex-col items-start justify-center gap-6 relative z-10 text-white">
            {isWebDevelopment ? (
              <>
                <h1 data-aos="fade-right" className="heading-1 text-white">
                  Launch full-stack web experiences that scale with your vision
                </h1>
                <p
                  data-aos="fade-right"
                  className="description text-white mt-2"
                >
                  From marketing destinations to mission-critical platforms, we craft web experiences that blend performance, accessibility, and measurable impact.
                </p>
              </>
            ) : (
              <>
                <h1 data-aos="fade-right" className="heading-1 text-white">
                  Mobile products powered by intelligence and crafted for loyalty
                </h1>
                <p
                  data-aos="fade-right"
                  className="description text-white mt-2"
                >
                  We design and build native and cross-platform apps that feel effortless to use, ship fast, and keep improving with every release.
                </p>
              </>
            )}
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                smooth
                duration={500}
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#04040f] transition-all duration-200 hover:-translate-y-1"
              >
                Start a project
              </Link>
              <Link
                to="services"
                smooth
                duration={500}
                offset={-40}
                className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                Explore capabilities
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="md:flex hidden justify-center">
            <Link to="contact" id="robot" className="cursor-pointer">
              <img
                src={robot}
                className="w-[15rem] object-contain relative z-0"
                alt="robot"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

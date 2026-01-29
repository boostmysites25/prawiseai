import React, { useEffect, useRef, useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import bannerThumb from "../../assets/vids/banner-thumb.webp";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { Link } from "react-scroll";

const DataAnalyticsBanner = ({ title }) => {
    const containerRef = useRef(null);
    const [isVideoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create growing/shrinking bars or floating squares
            const blocks = Array.from({ length: 15 }).map((_, i) => {
                const div = document.createElement("div");
                div.className =
                    "absolute border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm";
                // Random size
                const w = Math.random() * 60 + 20;
                const h = Math.random() * 60 + 20;
                div.style.width = `${w}px`;
                div.style.height = `${h}px`;
                div.style.left = `${Math.random() * 100}%`;
                div.style.top = `${Math.random() * 100}%`;
                div.style.opacity = '0';
                containerRef.current.appendChild(div);
                return div;
            });

            blocks.forEach((block) => {
                // Floating effect
                gsap.to(block, {
                    y: `random(-50, 50)`,
                    rotation: `random(-20, 20)`,
                    opacity: `random(0.4, 0.8)`,
                    duration: `random(4, 8)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

        }, containerRef);

        // Data Stack Animation
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
        });

        tl.to("#data-stack", {
            translateY: -20,
            duration: 2.5,
            ease: "power1.inOut",
        });

        // Add hover event listeners
        const stackElement = document.getElementById("data-stack");
        if (stackElement) {
            const handleMouseEnter = () => tl.pause();
            const handleMouseLeave = () => tl.resume();
            stackElement.addEventListener("mouseenter", handleMouseEnter);
            stackElement.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                ctx.revert();
                tl.kill();
                stackElement.removeEventListener("mouseenter", handleMouseEnter);
                stackElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                {!isVideoLoaded && (
                    <img
                        src={bannerThumb}
                        alt="Data Analytics Banner"
                        className="w-full h-full object-cover opacity-40"
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
                                style: { objectFit: "cover", width: "100%", height: "100%", opacity: 0.4 } // Applied opacity
                            },
                        },
                    }}
                    style={{ position: "absolute", top: 0, left: 0, opacity: 0.9 }}
                    controls={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-blue-900/80 mix-blend-multiply"></div>
            </div>

            {/* Animation Container */}
            <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none"></div>

            {/* Content */}
            <div className="w-full absolute left-0 top-0 h-full">
                <div className="wrapper h-full grid md:grid-cols-[55%_auto] items-center md:gap-10">
                    <div className="flex w-full flex-col items-start justify-center gap-6 relative z-10 text-white">
                        <div data-aos="zoom-in" className="inline-block px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-900/30 backdrop-blur-md">
                            <span className="text-teal-300 font-semibold tracking-wider text-sm uppercase">Data-Driven Intelligence</span>
                        </div>
                        <h1 data-aos="fade-right" className="heading-1 text-white">
                            {title} <span className="text-teal-400">.</span>
                        </h1>
                        <p
                            data-aos="fade-right"
                            className="description text-teal-50 mt-2"
                        >
                            Unlocking actionable insights from your raw data ecosystem with scalable architectures and intuitive dashboards.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="contact"
                                smooth
                                duration={500}
                                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#04040f] transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                            >
                                Start a project
                            </Link>
                            <Link
                                to="services"
                                smooth
                                duration={500}
                                offset={-40}
                                className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 cursor-pointer"
                            >
                                Explore capabilities
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div data-aos="fade-left" className="md:flex hidden justify-center relative">
                        {/* Using a placeholder visual or just letting the background animations shine on this side if no specific hero asset is preferred. 
                            However, to match Banner.jsx, let's include the 'modern-data-stack' image as a floating element if imports allow, or the robot if needed, but robot is AI.
                            Let's use a glassmorph card effect or similar if no 3D asset.
                            Actually, let's use the 'modern-data-stack.png' we have. */}
                        <Link to="contact" className="cursor-pointer">
                            <img
                                src={require("../../assets/data-analytics/modern-data-stack.png")}
                                className="w-[20rem] object-contain relative z-0 opacity-90 drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-full"
                                alt="Data Stack"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-0 pointer-events-none"></div>
        </div>
    );
};

export default DataAnalyticsBanner;

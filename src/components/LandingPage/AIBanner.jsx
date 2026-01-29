import React, { useEffect, useRef, useState } from "react";
import vid from "../../assets/vids/banner.mp4";
import bannerThumb from "../../assets/vids/banner-thumb.webp";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { Link } from "react-scroll";
import robot from "../../assets/ai-robot.png";

const AIBanner = ({ title }) => {
    const containerRef = useRef(null);
    const [isVideoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Generate random particles
            const particles = Array.from({ length: 20 }).map((_, i) => {
                const div = document.createElement("div");
                div.className =
                    "absolute rounded-full bg-blue-400 blur-[1px] opacity-0";
                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;
                div.style.left = `${Math.random() * 100}%`;
                div.style.top = `${Math.random() * 100}%`;
                containerRef.current.appendChild(div);
                return div;
            });

            // Animate particles
            particles.forEach((particle) => {
                gsap.to(particle, {
                    y: "random(-100, 100)",
                    x: "random(-100, 100)",
                    opacity: "random(0.5, 1)",
                    duration: "random(3, 6)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
                // Pulse effect
                gsap.to(particle, {
                    scale: "random(1, 1.5)",
                    duration: "random(1, 2)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 2)"
                })
            });
        }, containerRef);

        // Robot Animation
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
        });

        tl.to("#robot", {
            translateY: -20, // Reduced movement for cleaner look + floating
            duration: 2,
            ease: "power1.inOut",
        });

        // Add hover event listeners to pause and resume animation
        const robotElement = document.getElementById("robot");
        if (robotElement) {
            const handleMouseEnter = () => tl.pause();
            const handleMouseLeave = () => tl.resume();
            robotElement.addEventListener("mouseenter", handleMouseEnter);
            robotElement.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                ctx.revert();
                tl.kill();
                robotElement.removeEventListener("mouseenter", handleMouseEnter);
                robotElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black/90">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                {!isVideoLoaded && (
                    <img
                        src={bannerThumb}
                        alt="AI Banner"
                        className="w-full h-full object-cover opacity-30"
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
                                style: { objectFit: "cover", width: "100%", height: "100%", opacity: 0.3 }
                            },
                        },
                    }}
                    style={{ position: "absolute", top: 0, left: 0, opacity: 0.9 }}
                    controls={false}
                />
            </div>

            {/* Animation Container */}
            <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none"></div>

            {/* Content */}
            <div className="w-full absolute left-0 top-0 h-full">
                <div className="wrapper h-full grid md:grid-cols-[55%_auto] items-center md:gap-10">
                    <div className="flex w-full flex-col items-start justify-center gap-6 relative z-10 text-white">
                        <h1 data-aos="fade-right" className="heading-1 text-white">
                            {title}
                        </h1>
                        <p
                            data-aos="fade-right"
                            className="description text-white mt-2"
                        >
                            Pioneering the future with intelligent algorithms and generative innovation that scales with your vision.
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

                    {/* Robot Image on Right */}
                    <div data-aos="fade-left" className="md:flex hidden justify-center">
                        <Link to="contact" className="cursor-pointer">
                            <img
                                src={robot}
                                className="w-[15rem] object-contain relative z-0 animate-float" // animate-float if defined in global css, otherwise standard
                                alt="AI Robot"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIBanner;

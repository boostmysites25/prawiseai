import React, { lazy, memo } from "react";
import Header from "../../components/LandingPage/Header";
import { dataAnalyticsServices } from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import dataImg from "../../assets/services-details/data-engineering-1.webp"; // Using existing asset

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
    import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
    import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
    import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const DataAnalyticsBanner = lazy(() => import("../../components/LandingPage/DataAnalyticsBanner"));

const DataAnalytics = () => {
    return (
        <>
            <Header />
            <DataAnalyticsBanner title="Data Analytics & BI" />

            <div className="bg-slate-50 py-[5rem] mb-[3rem]">
                <div className="wrapper">
                    <div className="grid md:grid-cols-2 items-center gap-5">
                        <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                            <img
                                src={dataImg}
                                className="w-full h-full object-cover"
                                alt="Data Analytics"
                            />
                            <div className="absolute left-0 top-0 w-full p-3 h-full flex items-center justify-center bg-teal-900/70">
                                <div className="text-white space-y-3 text-center">
                                    <p className="font-sans text-3xl sm:text-4xl font-bold text-teal-50">
                                        Turn Data into Decisions
                                    </p>
                                    <p className="description text-teal-100">
                                        We build modern data stacks and intuitive dashboards that give you the clarity to act faster and smarter.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>

            <TrustWorthySection />

            <section
                id="services"
                className="w-screen py-[3rem] min-h-[70vh] flex justify-center relative bg-white"
            >
                <div className="wrapper flex flex-col items-center gap-5 z-10">
                    <h1
                        data-aos="fade-up"
                        className="heading text-center max-w-6xl whitespace-pre-line capitalize text-slate-800"
                    >
                        Clarity from Complexity
                    </h1>
                    <p data-aos="fade-up" className="text-center max-w-6xl description text-slate-500">
                        From raw data to refined insight, we architect the pipelines and visual layers that power data-driven organizations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-4">
                        {dataAnalyticsServices.map((item) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                className="relative group shadow-2xl py-[4rem] md:py-[8rem] flex items-center overflow-hidden rounded-xl p-5 border border-slate-200 bg-white hover:border-blue-500 transition-colors duration-300"
                            >
                                {/* Background Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-50 group-hover:scale-110 transition-all duration-700 z-0 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-slate-900 to-slate-900 opacity-50 group-hover:opacity-0 transition-all duration-700 z-0"></div>
                                <div className="flex flex-col gap-4 items-center relative z-10 w-full group-hover:scale-105 transition-transform duration-500">
                                    <h6 className="font-bold text-center text-2xl md:text-3xl text-white group-hover:opacity-0 transition-all duration-700">
                                        {item.title}
                                    </h6>
                                    <p className="text-lg text-center text-white group-hover:opacity-0 max-w-xs transition-all duration-700">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <HomePageServicesList />
            <IndustriesWeServe />
            <CallToAction />
            <Portfolio />
            <Testimonials />
            <BrandLogos />
            <GetInTouch />
            <Footer />
        </>
    );
};

export default memo(DataAnalytics);

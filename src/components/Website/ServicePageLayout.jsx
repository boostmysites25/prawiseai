import React from "react";
import Header from "./Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import { allServices, clientDetails } from "../../constants";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "./Footer";
import { BsClock } from "react-icons/bs";
import GetInTouch from "../GetInTouch";

const ServicePageLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-primary/5">
      <Header />
      {/* <ServiceDetailsBanner /> */}
      <div className="wrapper pt-[3rem]">
        <div className="pt-[3rem] pb-[2rem] grid md:grid-cols-[30%_65%] gap-10">
          <div className="w-full flex flex-col gap-10">
            <div
              data-aos="fade-up"
              className="rounded-2xl bg-[#04040f] p-5 text-white shadow-lg lg:p-6"
            >
              <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
                Explore our studios
              </h4>
              <div className="mt-5 flex flex-wrap md:flex-col gap-3">
                {allServices.map((item) => (
                  <Link
                    key={item.slug}
                    className={`${
                      `/services/${item.slug}` === pathname
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    } flex items-center gap-2 justify-between rounded-xl px-4 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-200`}
                    to={`/services/${item.slug}`}
                  >
                    {item.title} <IoIosArrowRoundForward className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="text-center hidden md:flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-b from-primary to-secondary px-4 lg:px-6 py-10 text-white"
            >
              <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-white text-primary">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <h4 className="text-2xl font-medium">Talk to a strategist</h4>
              <Link to={`tel:${clientDetails.phone}`} className="font-semibold tracking-[0.2em] uppercase">
                {clientDetails.phone}
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="text-center bg-[#ECF8FF] hidden md:flex flex-col items-start gap-3 px-4 lg:px-6 py-10 rounded-lg"
            >
              <h4 className="text-xl font-semibold uppercase tracking-[0.2em]">
                Availability
              </h4>
              <div className="flex flex-col gap-3 w-full">
                <Link className="bg-background text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                  <BsClock className="text-xl text-primary" />
                  Mon — Fri : 9:00 AM - 7:00 PM IST / 9:00 AM - 5:00 PM PST
                </Link>
                <Link className="bg-background text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                  <BsClock className="text-xl text-primary" />
                  Sat - Sun : By appointment
                </Link>
                <Link
                  to="/contact-us"
                  className="tertiary-btn flex justify-center items-center gap-2 rounded-md"
                >
                  Book a call{" "}
                  <IoIosArrowRoundForward className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-[#ECF8FF] flex md:hidden flex-col items-start gap-3 px-4 lg:px-6 py-10 rounded-lg"
          >
            <h4 className="text-xl font-semibold">Working Days</h4>
            <div className="flex flex-col gap-3 w-full">
              <Link className="bg-background text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Mon — Fri : 9:00 AM - 7:00 PM IST / 9:00 AM - 5:00 PM PST
              </Link>
              <Link className="bg-background text-[#17012C] flex items-center gap-2 p-3 rounded-md">
                <BsClock className="text-xl text-primary" />
                Sat - Sun : By appointment
              </Link>
              <Link
                to="/contact-us"
                className="tertiary-btn flex justify-center items-center gap-2 rounded-md"
              >
                Appointment Now <IoIosArrowRoundForward className="text-3xl" />
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="text-center bg-gradient-to-b flex md:hidden flex-col items-center gap-3 text-white from-primary to-secondary px-4 lg:px-6 py-10 rounded-lg"
          >
            <div className="w-[3.5rem] h-[3.5rem] bg-background text-primary rounded-full p-3 flex justify-center items-center">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h4 className="text-xl font-semibold uppercase tracking-[0.2em]">
              Talk to a strategist
            </h4>
            <Link to={`tel:${clientDetails.phone}`} className="font-semibold tracking-[0.2em] uppercase">
              {clientDetails.phone}
            </Link>
          </div>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ServicePageLayout;

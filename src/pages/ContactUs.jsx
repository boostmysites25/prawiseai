import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import map from "../assets/map.webp";
import { clientDetails } from "../constants";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import banner from "../assets/contact-us-banner.webp";
import { InquiryForm } from "../components/GetInTouch";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"Contact Us"}
        banner={banner}
        position={"left"}
        description="Let’s explore your next product milestone, map the roadmap, and assemble a squad that delivers measurable results."
      />
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-10 py-[3rem]">
          <div data-aos="fade-right" className="flex flex-col gap-5 pt-[2rem]">
            <h1 className="heading text-center lg:text-start">
              Let’s design the future of your digital product
            </h1>
            <p className="description text-center lg:text-start">
              Share a few details about your product challenge and we’ll respond within one business day with next steps. Prefer to talk? Call us and we’ll jump on a strategy session.
            </p>
          </div>
          <div className="flex justify-center">
            <InquiryForm />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-primary/5 relative min-h-[50vh] bg-center bg-cover"
      >
        <div className="wrapper py-[3rem] flex justify-center">
          <div className="w-full max-w-3xl rounded-[2.5rem] bg-[#04040f]/85 px-8 py-12 text-white backdrop-blur">
            <h5 className="text-2xl font-semibold mb-6 uppercase tracking-[0.3em] text-white/60">Contact Info</h5>
            <a
              href={`tel:${clientDetails.phone}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white/10 rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.phone}</p>
            </a>
            <a
              href={`mailto:${clientDetails.email}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-white/10 rounded-full p-3 flex justify-center items-center">
                <FaEnvelope className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.email}</p>
            </a>
            <div className="flex gap-3 mt-7 w-fit">
              <div className="w-[3.5rem] h-[3.5rem] bg-white/10 rounded-full p-3 flex justify-center items-center">
                <FaMapLocationDot className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium max-w-[35rem]">
                {clientDetails.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

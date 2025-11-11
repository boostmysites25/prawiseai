import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { allServices } from "../constants";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const data = allServices.find((item) => item.slug === serviceName);

  if (!data) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="flex flex-col gap-10 md:px-5">
      <div className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-lg">
        <img
          data-aos="fade-up"
          src={data.img1}
          loading="lazy"
          className="h-[25rem] w-full rounded-3xl object-cover object-center"
          alt={data.title}
        />
        <div className="flex flex-col gap-4">
          <h2 data-aos="fade-up" className="text-3xl font-semibold">
            {data.title}
          </h2>
          <p data-aos="fade-up" className="description text-[#2d2d2d]/80">
            {data.detailsPageContent.firstPara}
          </p>
        </div>
      </div>
      <div className="grid gap-6 rounded-[2rem] bg-[#04040f] p-6 text-white shadow-xl">
        <img
          data-aos="fade-up"
          src={data.img2}
          loading="lazy"
          className="h-[25rem] w-full rounded-3xl object-cover object-center"
          alt={data.title}
        />
        <div className="flex flex-col gap-4">
          <h2 data-aos="fade-up" className="text-3xl font-semibold">
            Engagement blueprint
          </h2>
          <p data-aos="fade-up" className="text-white/80">
            {data.detailsPageContent.servicesSection}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

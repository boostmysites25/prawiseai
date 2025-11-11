import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/blogs-banner.webp";
import CallToAction from "../components/CallToAction";
import { blogs } from "../data/blogs";

const Blogs = () => {
  return (
    <div className="bg-secondary/5">
      <Header />
      <PageBanner
        title="Insights & Playbooks"
        banner={banner}
        description="Ideas, frameworks, and lessons from shipping intelligent products with teams around the world."
      />
      <div className="py-[5rem] relative text-primary_text">
        <div className="flex flex-col gap-5 items-center wrapper">
          <h4 data-aos="fade-up" className="heading text-center max-w-4xl mx-auto leading-tight">
            Exploring the edge of intelligent product design
          </h4>
          <p className="description text-center text-[#2d2d2d]/70 max-w-3xl">
            We document what works, what fails, and how to build products that delight customers while hitting business goals.
          </p>
          <div className="mt-[2rem] grid sm:grid-cols-2 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-[5rem]">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <article
      data-aos="fade-up"
      className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#04040f]/10 bg-white p-5 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      <Link to={`/blog-detail/${blog.id}`}>
        <img
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="aspect-video w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-col gap-3 mt-[1.5rem] flex-1">
        <Link to={`/blog-detail/${blog.id}`} className="text-2xl font-semibold leading-tight text-[#04040f] transition-colors duration-200 hover:text-primary">
          {blog.title}
        </Link>
        <p className="text-[#2d2d2d]/80 text-base leading-relaxed line-clamp-3">
          {blog.desc}
        </p>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blog-detail/${blog.id}`} className="w-full text-center rounded-full border border-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white">
          Read More
        </Link>
      </div>
    </article>
  );
};

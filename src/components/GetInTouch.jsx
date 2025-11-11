import React, { useContext, useEffect, useRef, useState } from "react";
import { allServices, clientDetails } from "../constants";
import { BiCaretRight } from "react-icons/bi";
import { SpinnerContext } from "./SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const GetInTouch = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="blurred-red-circle bottom-[2rem] right-3 h-[25rem] w-[25rem] -z-10"></div>
      <div className="blurred-red-circle left-[-10rem] top-[5rem] h-[18rem] w-[18rem] bg-secondary/20 -z-10"></div>
      <div className="wrapper grid items-start gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
        <div data-aos="fade-right" className="flex flex-col gap-6">
          <p className="uppercase text-xs tracking-[0.3em] text-primary">
            Let’s design what’s next
          </p>
          <h2 className="heading leading-tight text-balance">
            Tell us about your product challenge and we’ll assemble the right
            team.
          </h2>
          <p className="description text-lg text-[#2d2d2d]/80">
            Whether you are shipping a new product, modernizing a platform, or
            scaling AI inside your organization, our specialists plug in fast.
            Share a few details and we’ll set up a working session within 24
            hours.
          </p>
          <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.24em] text-[#04040f]/60">
            <span>Email — {clientDetails.email}</span>
            <span>Phone — {clientDetails.phone}</span>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
};

export default GetInTouch;

export const InquiryForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0].title);
  const dropdownRef = useRef(null);
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    // Handler for clicking outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Service Needed: " + selectedService + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Prawise AI",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          // navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div data-aos="fade-left" className="group flex w-full flex-col gap-3">
      <p className="gradient-text uppercase">Project kickoff form</p>
      <div className="relative overflow-hidden rounded-3xl bg-[#04040f] px-8 py-9 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-30">
          <div className="blurred-red-circle right-[-6rem] top-[-6rem] h-[15rem] w-[15rem] bg-secondary/40"></div>
        </div>
        <div className="relative z-10 flex flex-col gap-2">
          <h3 className="text-[1.9rem] font-semibold leading-tight">
            Connect with our product strategists
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Complete the form and we’ll respond with next steps, timelines, and
            a tailored collaboration model.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-6 grid grid-cols-1 gap-4"
        >
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-sm uppercase tracking-[0.2em] text-white/60">
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <p className="text-sm text-red-200">{errors.name?.message}</p>
            </div>
            <div className="">
              <label className="text-sm uppercase tracking-[0.2em] text-white/60">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
              />
              <p className="text-sm text-red-200">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-sm uppercase tracking-[0.2em] text-white/60">
                Subject
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                placeholder="Enter subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <p className="text-sm text-red-200">{errors.subject?.message}</p>
            </div>
            <div className="">
              <label className="text-sm uppercase tracking-[0.2em] text-white/60">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <p className="text-sm text-red-200">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="flex flex-col relative" ref={dropdownRef}>
            <label className="text-sm uppercase tracking-[0.2em] text-white/60">
              Service You Are Interested In
            </label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="mt-2 flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white"
            >
              {selectedService}
              <BiCaretRight
                className={`${
                  dropdownOpen && "rotate-90"
                } transition-all duration-200 text-2xl text-white/70`}
              />
            </div>
            {dropdownOpen && (
              <div
                name=""
                id=""
                className="absolute top-[5rem] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d0d1f] shadow-2xl"
              >
                {allServices.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer p-3 text-sm text-white/80 transition-colors hover:bg-white/10"
                    onClick={() => {
                      setSelectedService(item.title);
                      setDropdownOpen(false);
                    }}
                  >
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-sm uppercase tracking-[0.2em] text-white/60">
              Project Overview
            </label>
            <textarea
              type="text"
              rows="4"
              placeholder="Tell us about your goals, timeline, and success metrics"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
              autoComplete="off"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <p className="text-sm text-red-200">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#04040f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

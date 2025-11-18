// import { allServices } from "../constants";
// import { BiCaretRight } from "react-icons/bi";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerContext } from "./SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { clientDetails } from "../constants";

const Form = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
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
  //   const [dropdownOpen, setDropdownOpen] = useState(false);
  //   const [selectedService, setSelectedService] = useState(allServices[0].title);
  //   const dropdownRef = useRef(null);

  //   useEffect(() => {
  //     // Handler for clicking outside of the dropdown
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setDropdownOpen(false); // Close the dropdown
  //       }
  //     };

  //     // Add event listener
  //     document.addEventListener("mousedown", handleClickOutside);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Prawise AI",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div data-aos="fade-left" className="w-full">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#04040f] p-7 text-white shadow-2xl sm:p-10">
        <div className="absolute inset-0 opacity-30">
          <div className="blurred-red-circle right-[-8rem] top-[-6rem] h-[15rem] w-[15rem] bg-secondary/40"></div>
        </div>
        <div className="relative z-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Kick off your project
          </p>
          <h2 className="text-3xl font-semibold leading-tight">
            Tell us where you want to go—we’ll map the path there
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="relative z-10 mt-6 grid grid-cols-1 gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Full name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => (val.trim() !== "" ? true : "Full name is required"),
                })}
              />
              <p className="mt-1 text-sm text-red-200">{errors.name?.message}</p>
            </div>
            <div>
              <input
                type="email"
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Work email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <p className="mt-1 text-sm text-red-200">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Project focus"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => (val.trim() !== "" ? true : "Subject is required"),
                })}
              />
              <p className="mt-1 text-sm text-red-200">{errors.subject?.message}</p>
            </div>
            <div>
              <input
                type="tel"
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
                autoComplete="off"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <p className="mt-1 text-sm text-red-200">{errors.phone?.message}</p>
            </div>
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Tell us about your goals, timeline, and success metrics"
              className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              autoComplete="off"
              {...register("message", {
                required: "Message is required",
                validate: (val) => (val.trim() !== "" ? true : "Message is required"),
              })}
            />
            <p className="mt-1 text-sm text-red-200">{errors.message?.message}</p>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-2 w-full rounded-full border border-white/30 bg-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#04040f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

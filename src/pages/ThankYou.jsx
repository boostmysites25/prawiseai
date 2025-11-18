import { Link } from "react-router-dom";
import { clientDetails } from "../constants";

const ThankYou = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03030a] text-white">
      <div className="blurred-red-circle left-[-6rem] top-[-3rem] h-[18rem] w-[18rem] bg-secondary/30"></div>
      <div className="blurred-red-circle right-[-8rem] bottom-[-4rem] h-[22rem] w-[22rem] bg-primary/20"></div>
      <div className="wrapper grid min-h-screen items-center gap-12 py-24 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
        <section data-aos="fade-right" className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Thank you
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Your message is on its way to the Prawise AI team
          </h1>
          <p className="text-lg text-white/70">
            We’ve received your details and one of our strategists will reach out
            within one business day. In the meantime, feel free to explore more
            about how we help bold teams build digital products faster.
          </p>
          <ul className="grid gap-3 text-white/80">
            {[
              "A dedicated expert will review your goals and prep the next steps.",
              "Expect a tailored plan covering timelines, pricing, and team makeup.",
              "Need to share more context? Reply to our confirmation email anytime.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:text-base"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/30 text-xs font-semibold text-white/90">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/services"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#04040f] transition-all duration-300 hover:-translate-y-1"
            >
              Explore Services
            </Link>
            <Link
              to="/"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#04040f]"
            >
              Back Home
            </Link>
          </div>
        </section>
        <aside
          data-aos="fade-left"
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-50">
            <div className="blurred-red-circle right-[-4rem] top-[-4rem] h-[13rem] w-[13rem] bg-secondary/50"></div>
          </div>
          <div className="relative z-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Next steps
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Already want to talk?
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Book time directly with our consultants or drop us a note if you
                have new requirements.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-[#050512]/70 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Email
                </p>
                <a
                  href={`mailto:${clientDetails.email}`}
                  className="mt-1 block text-lg font-semibold text-white hover:text-secondary"
                >
                  {clientDetails.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Phone
                </p>
                <a
                  href={`tel:${clientDetails.phone}`}
                  className="mt-1 block text-lg font-semibold text-white hover:text-secondary"
                >
                  {clientDetails.phone}
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-white/80">
              Prefer jumping back into discovery? Browse our latest case studies
              and insights to see what’s possible with AI-first product teams.
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ThankYou;


// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "+9100862952",
  email: "pkr@prawiseai.com",
  address: "1-19/3-7, SrinivasNagar, V.t.agraharam, Vizianagaram-545004,ANDHRA PRADESH",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Industries",
    link: "/industries",
  },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "Discovery Sprint",
    description: "Align teams, surface objectives, and frame success metrics.",
    img: process1,
  },
  {
    id: 2,
    title: "Experience Blueprint",
    description: "Design user journeys, information architecture, and visual identity.",
    img: process2,
  },
  {
    id: 3,
    title: "Agile Build",
    description: "Ship usable increments every sprint with continuous feedback loops.",
    img: process3,
  },
  {
    id: 4,
    title: "Launch & Elevate",
    description: "Release with confidence, monitor analytics, and optimize post-launch.",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Conversion-First Commerce",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "Headless storefronts engineered for speed, stability, and omnichannel revenue acceleration.",
  },
  {
    id: 2,
    title: "Community & Membership Hubs",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Interactive spaces that nurture loyalty with member dashboards, gated content, and live collaboration tools.",
  },
  {
    id: 3,
    title: "Launch-Ready Landing Systems",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Rapidly deployed landing page libraries that help growth teams test, learn, and scale campaigns.",
  },
  {
    id: 4,
    title: "Custom Platforms & Portals",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Full-stack platforms, dashboards, and workflow portals that bring complex operations online with ease.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Craftsmanship",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "Native experiences built with Swift and SwiftUI, blending beautiful interfaces with rock-solid performance.",
  },
  {
    id: 2,
    title: "Android Product Engineering",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Kotlin-first Android development that delivers intuitive journeys and leverages device capabilities fully.",
  },
  {
    id: 3,
    title: "Flutter Multi-Experience",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Single-codebase apps crafted with Flutter to launch fast without compromising brand polish or performance.",
  },
  {
    id: 4,
    title: "Hybrid Accelerator",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Progressive web and hybrid applications that merge native feel with the flexibility of web technologies.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    slug: "mobile-app-development",
    img1: require("./assets/services-details/app-development1.webp"),
    img2: require("./assets/services-details/app-development2.webp"),
    title: "Mobile App Development",
    smallPara:
      "Our mobile studio designs, engineers, and iterates consumer and enterprise apps that feel effortless to use and impossible to put down. From product strategy to store launch, we deliver experiences that build brand love and measurable value.",
    keyBenefits: [
      "Native and cross-platform builds tuned for performance and accessibility.",
      "Product strategy, UX research, and prototyping embedded into every project.",
      "Integrated analytics, experimentation, and automated release pipelines.",
      "Security-first delivery with lifecycle support and continuous optimization.",
    ],
    detailsPageContent: {
      firstPara: `Mobile is now the default gateway to your customers, partners, and teams. We assemble cross-functional squads that map the product vision, storyboard the interactions, and validate the experience before code is written.\n
          Designers, engineers, QA, and DevOps collaborate from day one, ensuring every release is purposeful and measurable. You gain a product team that ships value every sprint and keeps adapting as your roadmap evolves.`,
      servicesSection: `Our engagements span discovery and product strategy, prototyping, native iOS and Android engineering, Flutter and React Native builds, automated testing, and store deployment support.\n
          We integrate analytics, crash monitoring, and experimentation frameworks so you can measure impact, prioritize enhancements, and keep users delighted long after launch.`,
    },
  },
  {
    id: 2,
    slug: "full-stack-web-development",
    img1: require("./assets/services-details/web-development1.webp"),
    img2: require("./assets/services-details/web-development2.webp"),
    title: "Full-Stack Web Development",
    smallPara:
      "We craft responsive, accessible, and high-performing web experiences that turn complex operations into intuitive journeys. Our full-stack teams blend design systems, modern frameworks, and resilient architecture to keep you shipping faster.",
    keyBenefits: [
      "Headless architectures and microservices aligned to future-proof roadmaps.",
      "Design systems and component libraries that scale across teams and channels.",
      "Performance budgets, accessibility reviews, and SEO baked into delivery.",
      "Robust integrations with CRM, ERP, and third-party ecosystems.",
    ],
    detailsPageContent: {
      firstPara: `Every engagement begins with understanding the workflows, audiences, and business drivers behind your platform. We translate insight into experience maps, content strategy, and modular interfaces that feel cohesive on every screen size.\n
          On the engineering side we embrace modern stacks—Next.js, Remix, Node, Laravel, Nest, and serverless—to deliver secure, maintainable, and testable codebases. Infrastructure-as-code, automated testing, and continuous delivery keep releases predictable.`,
      servicesSection: `We deliver marketing sites, SaaS platforms, partner portals, and internal tools. Our scope includes UX/UI, API development, content migration, cloud orchestration, performance optimization, and ongoing enhancement.\n
          You leave with a scalable platform, detailed documentation, and a team ready to support future iterations without technical debt.`,
    },
  },
  {
    id: 3,
    slug: "artificial-intelligence-development",
    img1: require("./assets/services-details/generative-ai-1.webp"),
    img2: require("./assets/services-details/generative-ai-2.webp"),
    title: "Artificial Intelligence Development",
    smallPara:
      "From intelligent assistants to custom models, we operationalize AI that augments teams and automates decisions. Our experts help you experiment quickly, deploy responsibly, and govern AI initiatives end-to-end.",
    keyBenefits: [
      "Human-centered AI discovery, ethics review, and success criteria.",
      "Model selection, training, and fine-tuning across classical ML and generative AI.",
      "Production-grade MLOps with monitoring, drift detection, and retraining loops.",
      "Secure integrations with your data estate, applications, and workflows.",
    ],
    detailsPageContent: {
      firstPara: `AI should be purposeful, transparent, and measurable. We begin with opportunity framing and readiness assessments to pinpoint high-impact use cases. Our team prototypes with your real data, validating accuracy, bias, and user experience before scaling.\n
          We combine classical machine learning, computer vision, NLP, and the latest generative models to create intelligent products and automations that play nicely with your existing systems.`,
      servicesSection: `Delivery spans data engineering, feature store design, model development, evaluation, deployment, and ongoing tuning. We implement MLOps pipelines, governance frameworks, audit trails, and human-in-the-loop workflows so you can innovate responsibly.\n
          Whether you need a conversational assistant, predictive engine, or AI-powered product, we partner from concept to continuous improvement.`,
    },
  },
  {
    id: 4,
    slug: "data-analytics-business-intelligence",
    img1: require("./assets/services-details/data-engineering-1.webp"),
    img2: require("./assets/services-details/data-engineering-2.webp"),
    title: "Data Analytics & Business Intelligence",
    smallPara:
      "We transform raw data into reliable insights and predictive foresight. From modern data stacks to executive dashboards, our BI solutions turn information overload into confident decisions.",
    keyBenefits: [
      "Modern data platforms with governed pipelines and automated quality checks.",
      "Interactive dashboards and storytelling tailored to stakeholders at every level.",
      "Forecasting, segmentation, and scenario modeling to guide proactive moves.",
      "Privacy-first architecture with compliance and security embedded.",
    ],
    detailsPageContent: {
      firstPara: `Great decisions require clean, connected data. We start by mapping your sources, defining business logic, and establishing the governance needed to trust every metric. ELT pipelines, warehouse modeling, and semantic layers ensure data is always analysis-ready.\n
          Analysts and designers craft dashboards, narratives, and alerts that put insight in the hands of decision-makers, not buried inside spreadsheets.`,
      servicesSection: `Our team delivers data strategy, platform migration, analytics engineering, visualization, predictive analytics, and BI operations. We work with Snowflake, BigQuery, Databricks, Power BI, Tableau, Looker, and modern open-source tooling.\n
          The outcome: a living decision intelligence ecosystem that fuels experimentation, operational excellence, and executive confidence.`,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Leah Turner",
    title: "Chief Digital Officer, Elevate Retail",
    description:
      "Prawise AI helped us relaunch our digital storefront in record time. Conversion rates climbed immediately and our merchandisers finally have a platform they love to use.",
  },
  {
    id: 2,
    img: "",
    name: "Mason Reed",
    title: "VP Product, FlowFleet Logistics",
    description:
      "Their cross-functional squad plugged right into our workflow. We ship mobile updates weekly now, with analytics that show exactly how each release moves the needle.",
  },
  {
    id: 3,
    img: "",
    name: "Priya Srinivasan",
    title: "Head of Insights, NovaHealth",
    description:
      "The data platform they engineered gives our clinicians real-time intelligence. Forecast accuracy improved by 28% and our teams finally trust the numbers.",
  },
  {
    id: 4,
    img: "",
    name: "Ethan Morales",
    title: "CEO, SignalSync",
    description:
      "We came to Prawise AI with a bold idea for an AI co-pilot. They guided us from prototype to production with empathy, technical rigor, and genuine partnership.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Reimagining care delivery with remote monitoring, AI triage, secure data exchange, and HIPAA-ready platforms.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Personalizing every journey through unified commerce, inventory intelligence, and on-demand fulfillment.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Launching compliant financial products with automated KYC, smart underwriting, and real-time risk insights.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Modernizing underwriting and claims with predictive analytics, collaborative portals, and workflow automation.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Designing guest-centric apps, intelligent concierge services, and loyalty programs fueled by real-time data.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Connecting shop floors with predictive maintenance, digital twins, and productivity dashboards.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Building high-volume marketplaces with smart matching, dynamic pricing, and elastic infrastructure.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Digitizing kitchens and guest touchpoints with ordering platforms, delivery orchestration, and demand forecasting.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Coordinating fleets and freight with control towers, real-time tracking, and optimization algorithms.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Powering learner journeys with adaptive platforms, cohort analytics, and credential management systems.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Scaling live ops through cross-platform experiences, player analytics, and immersive storytelling tech.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/web_projects/1.webp"),
    title: "LumenHQ",
    category: "Web Experience",
  },
  {
    id: 2,
    img: require("./assets/web_projects/2.webp"),
    title: "OrbitPay",
    category: "Web Experience",
  },
  {
    id: 3,
    img: require("./assets/web_projects/3.webp"),
    title: "Northstar Advisory",
    category: "Web Platform",
  },
  {
    id: 4,
    img: require("./assets/web_projects/4.webp"),
    title: "Atlas Talent Cloud",
    category: "SaaS Platform",
  },
  {
    id: 5,
    img: require("./assets/web_projects/5.webp"),
    title: "Beacon Workspace",
    category: "Intranet Portal",
  },
  {
    id: 6,
    img: require("./assets/web_projects/6.webp"),
    title: "VelvetStreet",
    category: "Commerce",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/app_projects/1.webp"),
    title: "PulseGo",
    category: "Mobile App",
  },
  {
    id: 2,
    img: require("./assets/app_projects/2.webp"),
    title: "RouteMate",
    category: "Mobile App",
  },
  {
    id: 3,
    img: require("./assets/app_projects/3.webp"),
    title: "Artisan Lane",
    category: "Mobile App",
  },
  {
    id: 4,
    img: require("./assets/app_projects/4.webp"),
    title: "Horizon Faith",
    category: "Mobile App",
  },
];

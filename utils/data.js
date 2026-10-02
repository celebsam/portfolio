export const personalDetails = {
  name: "Uruemuesiri Samuel Ogbe-Green",
  shortName: "Samuel Ogbe-Green",
  brandName: "Samuel Green",
  title: "Senior Frontend Engineer · Web & Mobile",
  subtitle: "React | Next.js | React Native | TypeScript | Custom WordPress",
  location: "Abuja, Nigeria",
  phone: "+234 706 397 9371",
  email: "samuelogbe0@gmail.com",
  linkedin: "https://linkedin.com/in/samuel-ogbe-green",
  github: "https://github.com/celebsam",
  resumeUrl: "/Uruemuesiri_Samuel_Ogbe-Green_Resume.pdf",
  website: "https://samuel-green.vercel.app",
  yearsExperience: "5+",
  projectsCompleted: "35+",
  performanceScore: "90+",
};

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "35+", label: "Projects & WordPress Sites Shipped" },
  { value: "90+", label: "Lighthouse Performance Score" },
  { value: "40%", label: "Avg. Load-Time Speedup Achieved" },
];

export const engineeringPillars = [
  {
    id: "performance",
    icon: "⚡",
    title: "Core Web Vitals & Performance Optimization",
    description:
      "Reduced average application load times by 40% using code splitting, lazy loading, image optimization, SSR/ISR, achieving LCP under 2.5s and Lighthouse 90+ scores consistently.",
    highlights: ["Lighthouse 90+", "LCP < 2.5s", "ISR & SSR", "40% Speedup"],
  },
  {
    id: "architecture",
    icon: "🏗️",
    title: "State Architecture & Scalable Systems",
    description:
      "Architected global application state using Zustand & Redux, cutting prop-drilling complexity and reducing average bug-fix turnaround time by 30%.",
    highlights: ["Zustand", "Redux Toolkit", "React Query", "Modular Architecture"],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Cross-Platform Mobile Engineering",
    description:
      "Shipped production mobile applications on iOS App Store & Google Play Store using React Native.",
    highlights: ["React Native", "Google Maps API", "App Store & Play Store", "Offline Sync"],
  },
  {
    id: "ai-velocity",
    icon: "🤖",
    title: "AI-Assisted Engineering Workflows",
    description:
      "Leverage modern AI tools (Antigravity, Lovable, Magic Patterns, ChatGPT) for rapid UI prototyping, automated refactoring, and feature execution while maintaining strict manual code review standards.",
    highlights: ["Antigravity", "Lovable", "Magic Patterns", "Rapid Prototyping"],
  },
  {
    id: "wordpress",
    icon: "🧩",
    title: "Custom WordPress & Headless CMS",
    description:
      "Designed and developed 35+ custom WordPress themes & plugins (PHP, SCF, WooCommerce) optimized for security, SEO, and 90+ PageSpeed benchmarks.",
    highlights: ["35+ Sites Shipped", "Custom Plugins", "WooCommerce", "SCF & PHP"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Bidclover",
    subtitle: "E-Commerce & Marketplace Platform",
    category: "web",
    description:
      "Full-scale e-commerce marketplace platform built with Next.js and TypeScript. Transformed the platform into a high-performance shopping cart experience, leveraging Incremental Static Regeneration (ISR) to achieve sub-2.5s LCP across product pages.",
    image: "/images/bideclovere.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ISR"],
    source: "https://bidclover.com",
    visit: "https://www.bidclover.com",
    access: "private",
    type: "website",
    caseStudy: {
      role: "Lead Frontend Engineer",
      timeline: "Aug 2023 – Present",
      problem:
        "The legacy bidding interface needed conversion to a high-converting, scalable e-commerce marketplace with dynamic product filtering and fast page load times.",
      solution:
        "Architected a Next.js application with TypeScript, implementing ISR for thousands of product pages and optimizing bundle size to achieve an LCP under 2.5 seconds.",
      metrics: ["LCP < 2.5s", "90+ Lighthouse Score", "ISR Enabled"],
    },
  },
  {
    id: 2,
    title: "Iyaloja Logistics App",
    subtitle: "Location-Aware E-Commerce Mobile App",
    category: "app",
    description:
      "Cross-platform React Native mobile application connecting buyers and vendors. Features real-time location-based listing discovery, Google Maps integration, search autocomplete, and push notifications.",
    image: "/images/photo-collage.png",
    tags: ["React Native", "TypeScript", "Google Maps API", "Node.js", "MongoDB"],
    source: "https://github.com/celebsam",
    visit: "https://play.google.com/store/apps/details?id=com.iyalojalogistics",
    access: "private",
    type: "app",
    caseStudy: {
      role: "Mobile Frontend Engineer",
      timeline: "2022 – 2023",
      problem:
        "Field vendors and buyers needed a dependable mobile interface to discover nearby listings and track orders in areas with fluctuating network connectivity.",
      solution:
        "Engineered a React Native mobile app with offline-first data caching, location search autocomplete via Google Maps API, and managed release pipelines for Google Play Store.",
      metrics: ["Shipped to Google Play", "Location Autocomplete", "Offline Support"],
    },
  },
  // {
  //   id: 3,
  //   title: "Sam Shop Platform",
  //   subtitle: "Full-Stack MERN E-Commerce Storefront",
  //   category: "web",
  //   description:
  //     "A full-stack e-commerce web application featuring user authentication via JWT, cart state management, product filtering, and a comprehensive admin dashboard for order processing.",
  //   image: "/images/samshopss.PNG",
  //   tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  //   source: "https://github.com/celebsam/mern-shopping-cart",
  //   visit: "https://github.com/celebsam/mern-shopping-cart",
  //   access: "public",
  //   type: "website",
  //   caseStudy: {
  //     role: "Full Stack Engineer",
  //     timeline: "2022",
  //     problem:
  //       "Building a reliable end-to-end e-commerce platform to demonstrate RESTful API integration, JWT session management, and admin state management.",
  //     solution:
  //       "Designed and implemented REST APIs with Express & MongoDB, paired with a React SPA featuring client-side routing, protected routes, and interactive cart controls.",
  //     metrics: ["REST API Endpoints", "JWT Auth", "Admin Control Panel"],
  //   },
  // },
  {
    id: 4,
    title: "Cork-Dorx",
    subtitle: "Custom WordPress Culinary & Tasting Experience Platform",
    category: "wordpress",
    description:
      "Custom WordPress website engineered for Cork-DoRx, a luxury culinary pairings and wine tasting platform. Built with bespoke themes, interactive tasting experience showcases, direct booking flows, and responsive design optimized for speed and SEO.",
    image: "/images/cork-dorx.png",
    tags: ["WordPress", "PHP", "Custom Theme", "WooCommerce", "SEO", "Responsive Design"],
    source: "https://cork-dorx.com",
    visit: "https://cork-dorx.com",
    access: "private",
    type: "website",
    caseStudy: {
      role: "WordPress Developer & Designer",
      timeline: "2023 – 2024",
      problem:
        "Cork-DoRx needed a sophisticated web platform to showcase curated wine & culinary pairing experiences and drive direct tasting reservations.",
      solution:
        "Designed and engineered a custom WordPress platform featuring responsive hero sliders, intuitive tasting inquiry forms, image optimization for fast mobile loading, and local SEO.",
      metrics: ["Sub-2s Page Load", "Custom WordPress Theme", "Tasting Reservation Flow"],
    },
  }
];

export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Codelab Projects",
    location: "Abuja, Nigeria",
    period: "Aug 2023 – Present",
    type: "Full-time",
    summary:
      "Architecting and optimizing production web and mobile applications while leading Core Web Vitals optimization and AI-assisted workflows.",
    bullets: [
      "Architected and delivered production web and mobile applications using React, Next.js, React Native, and TypeScript, consistently achieving Lighthouse performance scores above 90.",
      "Designed, developed, and maintained 35+ custom WordPress websites for clients across e-commerce, SaaS, and professional services, focusing on responsive design, SEO, and maintainability.",
      "Reduced average React JS application page-load time by approximately 40% through code splitting, lazy loading, image optimization, and Core Web Vitals improvements.",
      "Designed and maintained application state architecture using Zustand, reducing prop-drilling complexity and cutting average bug-fix turnaround time by approximately 30%.",
      "Utilized AI-assisted development tools (Antigravity, Lovable, Magic Patterns, ChatGPT) for rapid prototyping, implementation, and code refactoring while maintaining strict manual quality standards.",
      "Integrated Google Maps API, location autocomplete, and Paystack/Stripe checkout flows for location-based and payment features.",
    ],
    tags: ["React", "Next.js", "React Native", "TypeScript", "Zustand", "WordPress", "Core Web Vitals", "AI Tools"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Hob System Digital",
    location: "Port Harcourt, Rivers State",
    period: "Jun 2020 – Feb 2023",
    type: "Full-time",
    summary:
      "Led key frontend initiatives including CRA to Next.js migration, Redux state management, and Paystack payment integrations.",
    bullets: [
      "Built fully responsive and accessible React interfaces using Redux for shared application state across complex user flows.",
      "Led the migration from Create React App to Next.js, introducing SSG and SSR capabilities that improved SEO and reduced Time to First Byte (TTFB) by more than 50%.",
      "Integrated Paystack into e-commerce checkout flows supporting card, bank transfer, and mobile money payments.",
      "Implemented Google OAuth authentication, reducing signup friction and increasing new account creation.",
      "Applied semantic HTML, responsive design, WCAG accessibility principles, and cross-browser testing throughout frontend development.",
    ],
    tags: ["React", "Next.js", "Redux", "Paystack", "JavaScript", "Google OAuth", "Bootstrap", "REST APIs"],
  },
];

export const skillsGrouped = [
  {
    category: "Frontend & Mobile Architecture",
    icon: "💻",
    items: [
      { name: "React.js", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React Native", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript (ES6+)", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5 / CSS3 / SASS", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    ],
  },
  {
    category: "State, Performance & SEO",
    icon: "⚡",
    items: [
      { name: "Zustand", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux / Redux Toolkit", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "React Query", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Core Web Vitals", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "Lighthouse Optimization", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "WCAG Accessibility", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    category: "Backend, APIs & WordPress",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "REST APIs Integration", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "WordPress & Custom Plugins", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
      { name: "WooCommerce & PHP", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    category: "AI & Development Workflows",
    icon: "🚀",
    items: [
      { name: "Antigravity AI", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Lovable & Magic Patterns", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "ChatGPT & AI Prototyping", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Git / GitHub / Azure", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma to Pixel-Perfect Code", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Paystack / Stripe / Maps API", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Chukwuemeka Eze",
    role: "Product Manager, Codelab / Bidclover",
    quote:
      "Samuel consistently delivers beyond expectations. His ability to translate Figma specs into performant, pixel-perfect interfaces while maintaining 90+ PageSpeed scores is exceptional. He thinks like a senior product engineer.",
    initials: "CE",
  },
  {
    id: 2,
    name: "Adaeze Okonkwo",
    role: "UI/UX Lead, Iyaloja",
    quote:
      "Working with Samuel is seamless. He respects design intent, asks critical architectural questions, and implements complex React Native mobile flows cleanly with great performance.",
    initials: "AO",
  },
  {
    id: 3,
    name: "David Nwosu",
    role: "Engineering Manager",
    quote:
      "Samuel's technical ownership is unmatched. From Next.js SSR migrations to Zustand state refactoring, his code is clean, well-documented, and built to scale.",
    initials: "DN",
  },
];

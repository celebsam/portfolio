export const projects = [
  {
    title: "Bidclover",
    description:
      "A full-featured e-commerce platform providing a seamless online shopping experience. I owned the frontend architecture end-to-end — building a fast, accessible storefront with server-side rendering, optimised images, and a mobile-first design that significantly improved conversion rates.",
    image: "/images/bideclovere.png",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    source: "https://bidclover.com",
    visit: "https://www.bidclover.com",
    access: "private",
    type: "website",
    id: 1,
  },
  {
    title: "Iyaloja Logistics App",
    description:
      "A React Native mobile app for delivery riders to manage assigned orders in real time — including order details, customer addresses, and contact info. Built with offline-first principles and push notifications to keep riders informed even in low-connectivity areas.",
    image: "/images/photo-collage.png",
    tags: ["React Native", "JavaScript", "Node.js", "MongoDB"],
    source: "https://github.com/celebsam",
    visit: "https://play.google.com/store/apps/details?id=com.iyalojalogistics",
    access: "private",
    type: "app",
    id: 2,
  },
  {
    title: "Sam Shop",
    description:
      "A full-stack MERN e-commerce app with cart management, user authentication with JWT, and an admin dashboard for product and order management. Built as a deep-dive into building production-ready REST APIs and connecting them to a React frontend.",
    image: "/images/samshopss.PNG",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    source: "https://github.com/celebsam/mern-shopping-cart",
    visit: "https://github.com/celebsam/mern-shopping-cart",
    access: "public",
    type: "website",
    id: 3,
  },
  {
    title: "Sam Green Portfolio",
    description:
      "This very portfolio — built with Next.js and SCSS, featuring scroll-based animations, a live contact form via EmailJS, an experience timeline, and a responsive layout. Designed to load fast and rank well on search engines with full SEO meta tags.",
    image: "/images/samgreen.png",
    tags: ["Next.js", "SCSS", "AOS", "EmailJS"],
    source: "https://github.com/celebsam",
    visit: "https://samuel-green.vercel.app",
    access: "public",
    type: "website",
    id: 4,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Bidclover",
    type: "Full-time",
    period: "2023 – Present",
    location: "Remote",
    bullets: [
      "Led frontend development of a high-traffic e-commerce platform serving thousands of daily users.",
      "Architected component library in React + TypeScript, reducing UI inconsistencies by 60%.",
      "Improved Lighthouse performance score from 54 to 91 through code-splitting and image optimisation.",
      "Collaborated with designers and product managers in agile sprints to ship features on schedule.",
    ],
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Iyaloja",
    type: "Full-time",
    period: "2022 – 2023",
    location: "Lagos, Nigeria",
    bullets: [
      "Built the Iyaloja Logistics mobile app from scratch using React Native, shipped to Google Play Store.",
      "Integrated real-time order tracking and push notifications with Firebase Cloud Messaging.",
      "Worked closely with the backend team to design and consume RESTful APIs.",
      "Reduced app crash rate by 35% through proactive error boundary implementation and testing.",
    ],
    tags: ["React Native", "JavaScript", "Firebase", "REST APIs"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Freelance",
    type: "Contract",
    period: "2020 – 2022",
    location: "Remote",
    bullets: [
      "Delivered 10+ web projects for clients across e-commerce, hospitality, and professional services.",
      "Specialised in converting Figma and Adobe XD designs into pixel-perfect, responsive websites.",
      "Built and maintained custom WordPress themes and headless CMS integrations.",
      "Established ongoing client relationships with a 90% satisfaction and repeat-hire rate.",
    ],
    tags: ["React", "HTML/CSS", "JavaScript", "WordPress"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Chukwuemeka Eze",
    role: "Product Manager, Bidclover",
    quote:
      "Samuel consistently delivers beyond expectations. His ability to translate design specs into polished, performant interfaces is exceptional. He&#39;s not just a developer — he thinks like a product engineer.",
    avatar: null,
    initials: "CE",
  },
  {
    id: 2,
    name: "Adaeze Okonkwo",
    role: "UI/UX Designer, Iyaloja",
    quote:
      "Working with Samuel is seamless. He asks the right questions, respects the design intent, and always pushes back constructively when something won&#39;t work for users. My designs come to life exactly as I envisioned.",
    avatar: null,
    initials: "AO",
  },
  {
    id: 3,
    name: "David Nwosu",
    role: "CTO, Freelance Client",
    quote:
      "We hired Samuel for a 3-month contract and extended it twice. His codebase is clean, well-documented, and easy to hand off. A developer who takes ownership and communicates proactively.",
    avatar: null,
    initials: "DN",
  },
];

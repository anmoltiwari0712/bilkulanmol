import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Anmol Tiwari | Product Designer & Frontend Developer",
  author: "Anmol Tiwari",
  description:
    "Developer based in India. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/anmol.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/bilkulanmol" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/anmol-tiwari-0bbb14227/",
    },
    { text: "Github", href: "https://github.com/anmoltiwari0712" },
    { text: "Youtube", href: "https://www.youtube.com/@bilkulanmol" },
    { text: "Behance", href: "https://www.behance.net/oanmoltiwari7" },
  ],
  socialImage: "/anmol.jpeg",
  canonicalURL: "https://bilkulanmol.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Anmol Tiwari",
    specialty: "Product Designer & Frontend Developer",
    summary:
      "Developer based in India. I specialize in UI design, web and mobile application development and maintenance.",
    email: "oanmoltiwari7@gmail.com",
  },
  experience: [
    {
      company: "Cognizant",
      position: "Programmer Analyst Trainee",
      startDate: "Apr 2025",
      endDate: "Present",
      summary: [
        "Designing and implementing scalable web applications for clients using .NET 8, C#, and EF Core, delivering reliable APIs and efficient CRUD operations.",
        "Securing application endpoints with JWT authentication and optimizing data queries using caching and AsNoTracking for improved performance.",
        "Collaborating in Agile teams to review code, implement features, and deploy applications.",
      ],
    },
    {
      company: "Sedin Technologies",
      position: "UI/UX Designer Intern",
      startDate: "Aug 2023",
      endDate: "Sep 2023",
      summary: [
        "Designed and prototyped user interfaces for web and mobile applications using Figma, ensuring intuitive and visually consistent layouts.",
        "Collaborated with developers to implement design handoffs and maintain consistency between design and code.",
      ],
    },
    // {
    //   company: "Driveer",
    //   position: "Frontend Developer",
    //   startDate: "Jun 2015",
    //   endDate: "Oct 2016",
    //   summary:
    //     "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    // },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vellore Institute Of Technology",
      location: "Vellore, Tamil Nadu, India",
      duration: "2021 - 2025",
      description:
        "Pursued a B.Tech degree with a focus on frontend development, UI/UX design, software engineering, and web technologies, maintaining a GPA of 7.84/10. Completed coursework in Data Structures, Algorithms, React, and Database Systems, gaining hands-on experience in designing and developing scalable applications and intuitive user interfaces using modern web technologies",
      icon: "/vit.png", // Optional: Add "/university-logo.png" (place in public/)
      link: "", // Optional: "https://your-university.edu/profile"
    },
    {
      degree: "Class 12 (Senior Secondary) – CBSE",
      institution: "Alagar Public School",
      location: "Tuticorin, Tamil Nadu, India",
      duration: "2019 - 2021",
      description:
        "Completed senior secondary education with a focus on Science and Mathematics, achieving 79.6% in the CBSE board examinations. Gained strong foundational knowledge in Physics, Chemistry, Mathematics, and Computer Science, preparing for advanced studies in technology and software development.",
      icon: "/alagar-bg.png", // Optional: Add "/university-logo.png" (place in public/)
      link: "", // Optional: "https://your-university.edu/profile"
    },
    {
      degree: "Class 10 (Higher Secondary) – CBSE",
      institution: "Alagar Public School",
      location: "Tuticorin, Tamil Nadu, India",
      duration: "2017 - 2019",
      description:
        "Completed secondary education with 87.8% in the CBSE board examinations. Developed a solid academic foundation in Science, Mathematics, and Computer Skills, laying the groundwork for higher education in engineering and computer science.",
      icon: "/alagar-bg.png", // Optional: Add "/university-logo.png" (place in public/)
      link: "", // Optional: "https://your-university.edu/profile"
    },

    // Add more (e.g., certifications like "Google UX Design Certificate" from Coursera)
  ],
  projects: [
    {
      name: "VITian UI Case Study",
      summary:
        "A UI/UX design project focused on creating an intuitive and user-friendly interface for a VITian platform.",
      linkPreview: "/",
      linkSource: "https://www.behance.net/gallery/230696965/VITian-Redesigned",
      image: "/Vitian.png",
    },
    {
      name: "HealthSyncc App",
      summary:
        "A UI/UX design project focused on secure healthcare data management with an intuitive and user-friendly interface.",
      linkPreview: "/",
      linkSource: "https://www.behance.net/gallery/200851221/HealthSyncc",
      image: "/healthsyncc.png",
    },
    {
      name: "India’s Got Latent Case Study",
      summary:
        "A UI/UX design project focused on creating an engaging and intuitive interface for the “India’s Got Latent” platform.",
      linkPreview: "/",
      linkSource:
        "https://www.behance.net/gallery/219131203/Redesigning-Indias-Got-Latent",
      image: "/latent.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Anmol Tiwari, a passionate developer and designer based in India, specializing in crafting seamless web and mobile experiences. I thrive at the intersection of UI/UX design and software development, building intuitive, user friendly, and high performance applications. With hands on experience in frontend development, React.js, and modern web technologies, I focus on creating solutions that are scalable, visually appealing, and technically robust. My projects span from interactive web platforms to engaging UI/UX case studies, all designed with an emphasis on usability, performance, and maintainability.
    `,
    image: "/bilkulanmol.jpg",
  },
};

// #5755ff

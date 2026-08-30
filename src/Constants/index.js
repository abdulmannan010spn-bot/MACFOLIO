const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "About Me",
    type: "about",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "2026",
    title: "My Journey in Open Source and Web Development",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 2,
    date: "2026",
    title: "Building Modern React Websites with Tailwind CSS",
    image: "/images/blog2.png",
    link: "#",
  },
  {
    id: 3,
    date: "2026",
    title: "Creating Interactive Web Experiences with GSAP",
    image: "/images/blog3.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "Figma"],
  },
  {
    category: "Animation",
    items: ["GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vite", "npm"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "#",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "#",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#ff866b",
    link: "#",
  },
  {
    id: 4,
    text: "Figma",
    icon: "/icons/figma.svg",
    bg: "#4bcb63",
    link: "#",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Projects",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};


/* =========================================================
   WORK / PROJECTS
========================================================= */

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",

  children: [

    // ▶ Project 1
    {
      id: 5,
      name: "Sonata Watch Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",

      children: [
        {
          id: 1,
          name: "Sonata Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",

          description: [
            "Sonata is a modern watch website designed with a premium and elegant visual experience.",
            "The website focuses on clean layouts, product presentation, smooth interactions, and responsive design.",
            "The project combines modern frontend development with UI/UX design to create a polished watch-shopping experience.",
            "The interface was built with React and modern web technologies with a strong focus on visual quality and responsiveness.",
          ],
        },

        {
          id: 2,
          name: "sonata.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "sonata.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },

        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },


    // ▶ Project 2
    {
      id: 6,
      name: "3D Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",

      children: [
        {
          id: 1,
          name: "3D Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",

          description: [
            "A creative 3D portfolio experience designed to showcase my development, design, and creative work.",
            "The project combines React with interactive 3D elements to create an immersive portfolio experience.",
            "It focuses on animations, interactive components, modern UI, and responsive layouts.",
            "The project explores technologies such as React Three Fiber, Drei, GSAP, and Tailwind CSS.",
          ],
        },

        {
          id: 2,
          name: "3d-portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-20 left-20",
        },

        {
          id: 4,
          name: "3d-portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },

        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },


    // ▶ Project 3
    {
      id: 7,
      name: "Legal Metrology AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",

      children: [
        {
          id: 1,
          name: "SIH26034 Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",

          description: [
            "A software solution for checking compliance of packaged commodities under the Legal Metrology (Packaged Commodities) Rules, 2011.",
            "The system is designed to scan product images and labels and extract important information from the packaging.",
            "The extracted information can then be checked against required Legal Metrology rules.",
            "The goal is to reduce manual inspection effort and provide a faster and more systematic compliance-checking process.",
          ],
        },

        {
          id: 2,
          name: "legal-metrology-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "legal-metrology.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },

        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};


/* =========================================================
   ABOUT ME
========================================================= */

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About Me",
  icon: "/icons/info.svg",
  kind: "folder",

  children: [

    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },

    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me-2.jpg",
    },

    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me-3.jpeg",
    },

    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",

      subtitle: "Meet Abdul Mannan",

      image: "/images/me.jpg",

      description: [
        "Hey! I'm Abdul Mannan 👋, a Computer Science student and developer who enjoys building modern, interactive, and visually polished digital experiences.",

        "I work with technologies such as HTML, CSS, JavaScript, React, Tailwind CSS, GSAP, and modern frontend tools.",

        "I enjoy combining development with UI/UX design and Figma to create websites that are not only functional but also visually engaging.",

        "I'm also involved with the Open Source Software and Research & Development Centre (OSS/OSSR&DC), where I explore open source, development, and collaborative projects.",

        "Outside development, I enjoy design, video editing, cricket, and experimenting with new creative ideas.",
      ],
    },
  ],
};


/* =========================================================
   RESUME
========================================================= */

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",

  children: [
    {
      id: 1,
      name: "Abdul-Mannan-Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",

      // Add your resume path here
      // href: "/resume/Abdul-Mannan-Resume.pdf",
    },
  ],
};


/* =========================================================
   ARCHIVE / TRASH
========================================================= */

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Archive",
  icon: "/icons/trash.svg",
  kind: "folder",

  children: [
    {
      id: 1,
      name: "old-project.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },

    {
      id: 2,
      name: "old-design.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};


export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};


/* =========================================================
   WINDOW CONFIG
========================================================= */

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },

  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};

export {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
};
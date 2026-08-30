const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
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
    date: "Aug 30, 2026",
    title: "My Journey as a Computer Science Student and Developer",
    image: "/images/react.png",
    link: "#",
  },
  {
    id: 2,
    date: "Aug 2026",
    title:
      "My Journey with Open Source Software & Research and Development Centre",
    image: "/images/oss.png",
    link: "#",
  },
  {
    id: 3,
    date: "Aug 2026",
    title:
      "What I Learned Building Projects with React, JavaScript & Modern Web Technologies",
    image: "/images/3js.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "3D Web",
    items: ["Three.js", "React Three Fiber"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Programming",
    items: ["Java", "JavaScript"],
  },
  {
    category: "Animation",
    items: ["GSAP", "ScrollTrigger"],
  },
  {
    category: "Designing",
    items: ["Figma", "Git", "GitHub", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "https://api.iconify.design/mdi:github.svg?color=white",
    bg: "#f4656b",
    link: "https://github.com/abdulmannan010spn-bot",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "https://api.iconify.design/mdi:instagram.svg?color=white",
    bg: "#4bcb63",
    link: "https://www.instagram.com/mai_mannan_hoon",
  },
  {
    id: 3,
    text: "LeetCode",
    icon: "https://api.iconify.design/simple-icons:leetcode.svg?color=white",
    bg: "#ff866b",
    link: "https://leetcode.com/u/MAI_MANNAN_HOON_10/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "https://api.iconify.design/mdi:linkedin.svg?color=white",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/abdul-mannan-537494375",
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
    title: "Places",
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
    img: "/images/gallery2.jpeg",
  },
  {
    id: 2,
    img: "/images/gallery3.jpeg",
  },
  {
    id: 3,
    img: "/images/gallery4.jpeg",
  },
  {
    id: 4,
    img: "/images/gallery5.jpeg",
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

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Sonata Website Application",
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
            "Sonata is a modern luxury watch website designed to showcase premium timepieces through an elegant and immersive digital experience.",
            "The website focuses on sophisticated visuals, clean typography, smooth interactions, and a premium shopping experience inspired by modern luxury brands.",
            "It features curated watch collections, premium products, brand storytelling, craftsmanship, and a responsive interface designed for desktop, tablet, and mobile devices.",
            "The project was built with React and Tailwind CSS, with a strong focus on reusable components, responsive layouts, smooth animations, and modern UI/UX.",
            "The website presents Sonata as a premium watch brand while keeping the browsing experience simple, refined, and visually engaging.",
          ],
        },

        {
          id: 2,
          name: "sonata.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sonata-eta.vercel.app/",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "sonata.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/sona.png",
        },

        {
          id: 5,
          name: "Sonata Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2

    {
      id: 6,
      name: "Apple 3D Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",

      children: [
        {
          id: 1,
          name: "Apple 3D Website Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",

          description: [
            "Apple 3D Website is an immersive and interactive web experience inspired by Apple's minimal and premium design language.",
            "The website combines modern UI design with interactive 3D elements to create a visually engaging product experience.",
            "It features a responsive layout, smooth animations, interactive 3D models, and carefully designed sections inspired by Apple's product presentation style.",
            "The 3D experience is powered by React Three Fiber and Three.js, allowing users to interact with and explore 3D objects directly in the browser.",
            "Built with React and Tailwind CSS, the project focuses on performance, responsiveness, clean component architecture, and a premium Apple-inspired user experience.",
          ],
        },

        {
          id: 2,
          name: "apple-3d.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://apple-psi-liard.vercel.app/",
          position: "top-20 left-20",
        },

        {
          id: 4,
          name: "apple-3d.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/app.png",
        },

        {
          id: 5,
          name: "Apple 3D Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    
    {
      id: 7,
      name: "3D Interactive Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",

      children: [
        {
          id: 1,
          name: "3D Interactive Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",

          description: [
            "My 3D Interactive Portfolio is a creative personal portfolio designed to showcase my projects, skills, experience, and development journey through an immersive web experience.",
            "Instead of using a traditional portfolio layout, it combines modern UI with interactive 3D elements, animations, and engaging visual experiences.",
            "The website allows visitors to explore my work, discover my skills, and interact with different sections of my portfolio in a more dynamic way.",
            "The 3D experience is powered by Three.js and React Three Fiber, with interactive 3D models, camera controls, and immersive scenes.",
            "Built with React, Tailwind CSS, GSAP, and React Three Fiber, the portfolio focuses on responsive design, smooth animations, performance, and a unique user experience.",
          ],
        },

        {
          id: 2,
          name: "3d-portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://3-d-portfolio-flame-seven.vercel.app/",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "3d-portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/port.png",
        },

        {
          id: 5,
          name: "Portfolio Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4 — Pokédex
    {
      id: 8,
      name: "Pokédex",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 left-80",
      windowPosition: "top-[33vh] left-60",

      children: [
        {
          id: 1,
          name: "Pokédex Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",

          description: [
            "Pokédex is an interactive web application that lets users explore and discover Pokémon from across the Pokémon universe.",
            "Users can browse Pokémon, search for their favorite characters, and view detailed information such as names, types, abilities, stats, and images.",
            "The application uses the PokéAPI to fetch real-time Pokémon data and dynamically display it through a clean and responsive interface.",
            "Built with React and Axios, the project demonstrates API integration, asynchronous data fetching, reusable components, and modern frontend development.",
            "The interface is designed to make exploring Pokémon simple, interactive, and enjoyable across desktop and mobile devices.",
          ],
        },

        {
          id: 2,
          name: "pokedex.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "YOUR_POKEDEX_LINK",
          position: "top-10 right-20",
        },

        {
          id: 4,
          name: "pokedex.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/pokemonpro.jpeg",
        },

        {
          id: 5,
          name: "Pokédex Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

// ▶ About Me
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
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
      imageUrl: "/images/my.png",
    },

    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gallery6.jpeg",
    },

    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gallery3.jpeg",
    },

    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",

      subtitle: "Meet the Developer Behind the Code",

      image: "/images/gallery7.png",

      description: [
        "Hey! I’m Abdul Mannan , a Computer Science student and developer who loves building interactive and visually engaging digital experiences.",

        "I’m pursuing my B.Tech in Computer Science at AKGEC, Ghaziabad, and work mainly with JavaScript, React, Tailwind CSS, and modern frontend technologies.",

        "I enjoy creating clean UI, smooth animations, responsive websites, and 3D experiences using tools like Three.js, React Three Fiber, and GSAP.",

        "I’m also part of OSS R&D Centre, where I learn, collaborate, and explore open-source development.",

        "Outside coding, I enjoy Figma, video editing, cricket, and experimenting with creative ideas.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/del.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/del2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Technex IIT (BHU)",
    icon:  starbucks,
    iconBg: "#383E56",
    date: "AUGUST 2022 - OCT 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer Trainee",
    company_name: "AccioJob",
    icon:  tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "My Frontend Module is done now I am learning Node.js.",
    ],
  },
];

const projects = [
  {
    name: "Crypto-tracker",
    description:
      " Implemented real-time updates of cryptocurrency prices using a cryptocurrency API.Designed an intuitive and user-friendly interface for tracking multiple cryptocurrencies.",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firbase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://cryptography-app-alpha.vercel.app/",
    
  },
  {
    name: "Podcast-Plateform",
    description:
      "An online podcast platform, a custom music player user can upload music and episodes. Create components for different parts of the platform, such as the homepage, login, music etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://podcast-react-ten.vercel.app/",
  },
  {
    name: "Finance-Tracker",
    description:
      "A user-friendly tool for managing finances, build using the React JS , ANT Design, and Firebase. It utilizes the react-firebase-hooks library to ensure smooth data synchronization and real-time updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://financelly.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
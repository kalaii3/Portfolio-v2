import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiVuedotjs, SiBootstrap, SiPhp, SiPython, SiMysql, SiNodedotjs ,SiGooglechrome , SiVisualstudiocode ,SiVercel , SiHeroku , SiNetlify } from "react-icons/si";
import { FaFileCode, FaAlignLeft, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop, MdEmail } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";

export const identity = {
  name: "Kalai",
  division: ["Frontend Developer", "Engineering Student"],
  region: "India",
  description: [
    "I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️I am fluent in classics like Python , Javascript and PHP.My field of Interest's are building new  Web Technologies and Products.",
    "I am a junior pursuing B.Tech Information Technology in Mookambigai College of Engineering ,Pudukkottai. I am a Full Stack Developer who is passionate about creating beautiful and joyful digital experiences. Besides development, I love music, games and travelling.",
  ],
  picture: ["/image/avatar.svg", "/image/Horizontal.png"],
  CV: "/pdf/CV 2.pdf",
};

export const linkList = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Experiences",
    href: "experiences",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];



export const aboutExperiencesList = [
  {
    number: 2,
    title: "Years Of Experience",
  },
  {
    number: 4,
    title: "Programming Language Used",
  },
  {
    number: 6,
    title: "Successed Projects",
  },
];

export const skillsList = [
  {
    SkillIcon: SiHtml5,
    title: "HTML",
    level: "Advanced",
  },
  {
    SkillIcon: SiCss3,
    title: "CSS",
    level: "Advanced",
  },
  {
    SkillIcon: SiJavascript,
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    SkillIcon: SiReact,
    title: "React JS",
    level: "Intermediate",
  },
  {
    SkillIcon: SiNextdotjs,
    title: "Next JS",
    level: "Basic",
  },
  {
    SkillIcon: SiTailwindcss,
    title: "Tailwind CSS",
    level: "Intermediate",
  },
  {
    SkillIcon: SiVuedotjs,
    title: "Vue JS",
    level: "Basic",
  },
  {
    SkillIcon: SiBootstrap,
    title: "Bootstrap",
    level: "Intermediate",
  },
  {
    SkillIcon: SiPhp,
    title: "PHP",
    level: "Basic",
  },
  {
    SkillIcon: SiPython,
    title: "Python",
    level: "Intermediate",
  },
  {
    SkillIcon: SiMysql,
    title: "MySQL",
    level: "Basic",
  },
  {
    SkillIcon: SiNodedotjs,
    title: "Node JS",
    level: "Basic",
  },
];

export const ToolsList = [
  {
    ToolIcon: SiVisualstudiocode,
    title: "VS Code",
    level: "Basic"
  },
  
  {
    ToolIcon: FaGithub,
    title: "GitHub"
  },
  {
    ToolIcon: SiGooglechrome,
    title: "Google Chrome"
  },
  {
    ToolIcon: SiVercel,
    title: "Vercel"
  },
  {
    ToolIcon: SiHeroku,
    title: "Heroku"
  },
  {
    ToolIcon: SiNetlify,
    title: "Netlify",

  }
];



export const portfolioList = [
  {
    title: "Portfolio V1",
    subtitle: "React JS and Bootstrap",
    img: "/image/portfolio.png",
    description:
      "This is my first portfolio website that I created using React JS and Bootstrap. This website is a website that can display information about me, my skills, my experiences, my projects and my contact information.",
    href: "https://portfolio-kalai2773.vercel.app/",
  },

  {
    title: "Weather Forecast ",
    subtitle: "React JS",
    img: "/image/weather.png",
    description: "Weather Forecast program that I created using React JS is a program that can display weather information in a city. This program uses the OpenWeatherMap API to get weather information.",
    href: "https://kalai-weather-a56pujgso-kalai2773.vercel.app/",
  },
  {
    title: "Arti Discord Bot",
    subtitle: "Discord JS, Node JS, MongoDB",
    img: "/image/arti.png",
    description: "Arti is a Discord bot that I created using Discord JS, Node JS and MongoDB. This bot can do many things, such as playing music, displaying information about the server, displaying information about the user, and many more.",
    href: "https://discord.com/channels/@me/1017603739462402170",
  }
];

export const allPortfolioList = [
  ...portfolioList,
 
];

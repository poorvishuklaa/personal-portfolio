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
    fooddelivery,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
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
      title: "Java Developer",
      company_name: "Internpe",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - June 2023",
      points: [
        "Developed and maintained Java-based applications, ensuring high performance and responsiveness.",
        "Collaborated with cross-functional teams to design and implement new features and functionalities",
        "Utilized Java frameworks such as Spring and Hibernate to build robust backend solutions..",
        "Participated in code reviews, debugging, and troubleshooting to enhance application quality",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Time chain summer of labs",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Contributed to open source blockchain projects, helping improve and expand their features.",
        "Wrote and deployed smart contracts for various blockchain applications",
        "Researched new blockchain technologies and integrated useful features into projects.",
        "Tested and fixed bugs in blockchain applications to ensure they work correctly.",
      ],
    },
    {
      title: "Open-source contributor",
      company_name: "Girlscript summer of code",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2023 - July 2023",
      points: [
        "Contributed to various open source frontend projects, enhancing user interfaces and experiences.",
        "Developed responsive web pages using HTML, CSS, and JavaScript.",
        "Worked with popular frontend frameworks like React and Vue.js to build dynamic and interactive user interfaces.",
        "Conducted code reviews to maintain high-quality code standards.",
      ],
    },
    {
      title: "Co-Author",
      company_name: "Cyber-Security Book",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Collaborated with a team of experts to research and write a comprehensive book on cybersecurity",
        "Contributed chapters on key topics such as network security, encryption, and threat detection.",
        "Developed practical examples and case studies to illustrate complex cybersecurity concepts.",
        "Received positive feedback from readers and industry experts, contributing to the book's success.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },

  ];
  
  const projects = [
    {
      name: "Art Bazar",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-native",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/poorvishuklaa/Art-Bazar.git",
    },
    {
      name: "Red Store",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/poorvishuklaa/Ecom.git",
    },
    {
      name: "Food Delivery App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: fooddelivery,
      source_code_link: "https://github.com/poorvishuklaa/Food-Delivery-App.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
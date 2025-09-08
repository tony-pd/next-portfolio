export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an eCommerce portal",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Avis Website",
    des: "Developed a responsive Next.js portal for AVIS Budget Group, facilitating car rentals for customers",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", '/html.svg', '/css.svg'],
    link: "https://www.avis.com/en/home",
  },
  {
    id: 2,
    title: "AutoZone portal",
    des: "AutoZone is a responsive portal that involves sale of automobile parts",
    img: "/p2.png",
    iconLists: ["/re.svg", "/js.svg", '/html.svg', '/css.svg'],
    link: "https://www.autozone.com/",
  },
  {
    id: 3,
    title: "Home Delight Website",
    des: "Built a food delivery app that delivers home cooked food.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/js.svg", '/html.svg', '/css.svg','/node.svg', '/mongo.svg'],
    link: "https://github.com/tony-pd/home-delight",
  },
  {
    id: 4,
    title: "Verizon Website",
    des: "Developed a website for a leading mobile network provider.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/js.svg", '/html.svg', '/css.svg'],
    link: "https://www.verizon.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Tony was a pleasure to work with and very professional throughout the project. His work was to exact specification and delivered on time. We will not hesitate in using him again for future work or recommend him highly to other sellers.",
    name: "Andrew M",
    title: "Project Manager at Winglet Media",
  },
  {
    quote:
      "Excellent work many thanks. Quick turn around and good communications.. very happy with the work done. Will use again",
    name: "Tom M",
    title: "Director at Millszola",
  },
  {
    quote:
      "Very quick turnaround and excellent work! As a Marketing Manager who oversees interactive media specialists, I would recommend this provider to anyone. Thanks!",
    name: "Michael Johnson",
    title: "Marketing Manager at BloomEvent",
  }  
];

export const companies = [
  {
    id: 1,
    name: "pearson",
    img: "/pearson.svg",
  },
  {
    id: 2,
    name: "ebay",
    img: "/ebay.svg",
  },
  {
    id: 3,
    name: "macy",
    img: "/macy.png",
  },
  {
    id: 4,
    name: "jpmorgan",
    img: "/jpmorgan.png",
  },
  {
    id: 5,
    name: "verizon",
    img: "/verizon.svg",
  },
];

export const workExperience = [
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Freelance Projects",
    desc: "Worked on a wide range of freelance projects, in web development across domains.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tony-pd",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/tonydavid13",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tony-p-d/",
  },
];
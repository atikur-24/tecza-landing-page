const menuConfig = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Portfolio",
    path: "/portfolio",
  },

  {
    name: "Pages",
    submenu: [
      {
        name: "About Us",
        path: "/about-us",
      },
      {
        name: "Contact Us",
        path: "/contact-us",
      },
      {
        name: "Creative Team",
        path: "/creative-team",
      },
      {
        name: "Blogs",
        path: "/blogs",
      },
    ],
  },
  {
    name: "Services",
    submenu: [
      {
        name: "Webflow",
        path: "/services/webflow",
      },
      {
        name: "Development",
        path: "/services/development",
      },
      {
        name: "UI/UX Design",
        path: "/services/uiux-design",
      },
      {
        name: "Branding",
        path: "/services/branding",
      },
    ],
  },
];

export default menuConfig;

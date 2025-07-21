export const ICON_CDN = "https://cdn.simpleicons.org/";

export const EXPERIENCE = [
  {
    id: 1,
    position: "Software Engineer",
    location: "Hyderabad, India",
    timeline: "July 2023 - Present",
    darkThemeLogo:
      "https://companieslogo.com/img/orig/OTEX_BIG.D-b3172504.png?t=1741951344",
    logo: "https://companieslogo.com/img/orig/OTEX_BIG-ea374e29.png?t=1741951344",
    workDetails: [
      "Contributed to the complete redesign and integration, following the decision to switch to a new design.",
      "Contributed to the migration of the admin panel from Backbone.js to React.",
      " Worked on a Content Management project, implementing new features and improving app performance by identifying and resolving memory leaks due to improper cleanup during component unmounting.",
    ],
  },
  {
    id: 2,
    position: "SDE-1 Frontend",
    location: "Hyderabad, India",
    timeline: "August 2021 - June 2023",
    logo: "https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg",
    darkThemeLogo:
      "https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoWhite.svg",
    workDetails: [
      "Built a Project and Billing Management System with the PSA/Timesheet team.",
      "Contributed to the development of reusable components and libraries, streamlining the development process.",
      "Reduced CSS file size and page load time by 70%, improving performance.",
      "Integrated REST APIs for smooth data exchange.",
    ],
  },
  {
    id: 3,
    position: "SDE-1 Frontend Intern",
    location: "Remote, India",
    timeline: "August 2021 - June 2023",
    darkThemeLogo:
      "https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoWhite.svg",
    logo: "https://d2w2i7rp1a0wob.cloudfront.net/static/images/logos/KekaLogoBlack.svg",
    workDetails: [
      "Gained hands-on experience with HTML, CSS, JavaScript, Angular, responsive design, and cross-browser compatibility; also developed technical documentation and built a documentation website from scratch",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Stream Mind",
    description: [
      "I wanted to create more than just another movie listing site. So I built a Browse experience where users can:",
      "🔍 Explore now playing, upcoming, and trending movies (live from TMDB API).",
      "🎞️ Click any movie to view full details and watch trailers in a smooth popup.",
      "❤️ Add to Favorites — Firebase Auth ensures your favs are stored and personalized.",
      '🧠 AI Recommendations — integrated with Gemini API, users can type a mood/genre (like "thriller with mind-blowing twists") and get top 5 picks instantly.',
      "💡 Auto Recommendations With AI — using Groq AI and current session behavior + favorites to auto-suggest the next movie.",
      "😂 Fun Feature — click a button and your movie title turns into an emoji puzzle! (e.g., Titanic → 🚢💔🌊)",
      "🎬 Random Movie Facts — fun facts about random movies appear on the AI search page to keep the experience engaging.",
    ],
    link: "https://stream-mind-9f149.web.app/",
    imageLink:
      "https://i.ibb.co/9mbdYWRv/Screenshot-2025-06-21-at-4-32-19-PM.png",
  },
];

export const techStackIcons = [
  {
    code: "javascript",
    name: "JavaScript",
    usedIn: ["Stream Mind"],
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    code: "react",
    name: "React",
    usedIn: ["Stream Mind"],
    link: "https://reactjs.org/docs/getting-started.html",
  },
  { code: "angular", name: "Angular", link: "https://angular.io/docs" },
  {
    code: "redux",
    name: "Redux",
    usedIn: ["Stream Mind"],
    link: "https://redux.js.org/introduction/getting-started",
  },
  {
    code: "reactivex",
    name: "RxJS",
    link: "https://rxjs.dev/guide/overview",
  },
  {
    code: "tailwindcss",
    name: "Tailwind CSS",
    usedIn: ["Stream Mind"],
    link: "https://tailwindcss.com/docs",
  },
  {
    code: "jest",
    name: "Jest",
    usedIn: ["Stream Mind"],
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    code: "css",
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    code: "html5",
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  { code: "figma", name: "Figma", link: "https://help.figma.com/hc/en-us" },
  { code: "git", name: "Git", link: "https://git-scm.com/doc" },
  {
    code: "bootstrap",
    name: "Bootstrap",
    link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
  },
  {
    code: "nodedotjs",
    name: "Node.js",
    link: "https://nodejs.org/en/docs",
    usedIn: ["Stream Mind"],
  },
  {
    code: "backbonedotjs",
    name: "Backbone.js",
    link: "https://backbonejs.org/#Getting-started",
  },
];

export const CERTFICATES = [
  {
    title: "Namaste React",
    href: "https://namastedev.com/manav10799/certificates/namaste-react",
    target: "_blank",
  },
  {
    title: "Namaste Javascript",
    href: "https://namastedev.com/manav10799/certificates/namaste-javascript",
    target: "_blank",
  },
  {
    title: "Angular",
    href: "https://jondouglas.dev/wp-content/uploads/2019/07/Self-Taught.png",
    target: "_blank",
    tooltip: "From documentation",
  },
];

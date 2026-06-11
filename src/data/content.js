export const SITE = {
  name: "Manav Arora",
  role: "Software Engineer",
  email: "manav10799@gmail.com",
  status: "Open to new opportunities",
  // Everest coordinates — a wink at the mountain obsession
  coords: "27.9881° N, 86.9250° E — EVEREST, FOR SCALE",
  tagline: ["I BUILD", "INTERFACES", "THAT FEEL ALIVE."],
  sub: "4+ years shipping React & Angular at scale. Off-duty: chasing light above the treeline.",
};

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/manav10799" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manav10799/" },
  { label: "Instagram", href: "https://www.instagram.com/manav._arora" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1spk0ot3_FCRHEY1_HPx477F01EmfpJ_N/view?usp=sharing",
  },
];

export const ABOUT = {
  heading: "Beyond the code",
  lines: [
    "Mountain soul. Photographer at heart. Engineer by craft.",
    "I spend my working hours building web apps people actually enjoy using — design systems, framework migrations, performance hunts, the unglamorous guts of a good product.",
    "Two years ago I rebuilt myself the way I'd rebuild legacy code: clean inputs, daily reps, no shortcuts. The gym taught me discipline. The mountains teach me patience and perspective. Photography is how I debug my head.",
  ],
  photos: [
    { src: "https://i.ibb.co/YBMKY2fD/APRIL-2024.jpg", caption: "april.2024" },
    { src: "https://i.ibb.co/W44ZWJC2/SS.jpg", caption: "still.frame" },
    { src: "https://i.ibb.co/qLKZgGTy/IMG-2908.jpg", caption: "img.2908" },
    { src: "https://i.ibb.co/pBVkV59g/IMG-7457-Copy.jpg", caption: "img.7457" },
    { src: "https://i.ibb.co/9kXV2r0J/VEE02883.jpg", caption: "vee.02883" },
    { src: "https://i.ibb.co/ynNB95L4/VDP09556.jpg", caption: "vdp.09556" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "Stream Mind",
    summary:
      "A movie discovery experience with AI brains — mood-based picks via Gemini, session-aware auto-recommendations via Groq, trailers, favorites, and movie titles turned into emoji puzzles.",
    highlights: [
      "Live TMDB data: now playing, upcoming, trending",
      "Gemini-powered mood search — “thriller with mind-blowing twists”",
      "Groq AI auto-suggests the next watch from session behavior",
      "Firebase Auth + personalized favorites",
    ],
    tags: ["React", "Redux", "Firebase", "Gemini", "Groq"],
    link: "https://stream-mind-9f149.web.app/",
    image: "https://i.ibb.co/9mbdYWRv/Screenshot-2025-06-21-at-4-32-19-PM.png",
  },
  {
    id: 2,
    name: "Not So Boring Weather",
    summary:
      "A sarcastic PWA that roasts you along with the forecast. Real-time OpenWeather data wrapped in brutal honesty and mood-matching pastel gradients.",
    highlights: [
      "Mobile-first PWA — installable, offline-friendly",
      "Every condition triggers a short, witty roast",
      "Mood-matched gradients per forecast",
    ],
    tags: ["React", "Vite", "Tailwind", "PWA", "OpenWeather"],
    link: "https://nsbweather.vercel.app/",
    image: "https://i.ibb.co/PZH93Z3M/NSBW.png",
  },
];

export const SKILL_GROUPS = [
  {
    group: "Core",
    skills: [
      { code: "javascript", name: "JavaScript", usedIn: ["Stream Mind", "NSB Weather"] },
      { code: "html5", name: "HTML5", usedIn: [] },
      { code: "css", name: "CSS", usedIn: [] },
    ],
  },
  {
    group: "Frameworks",
    skills: [
      { code: "react", name: "React", usedIn: ["Stream Mind", "NSB Weather"] },
      { code: "angular", name: "Angular", usedIn: [] },
      { code: "redux", name: "Redux", usedIn: ["Stream Mind"] },
      { code: "reactivex", name: "RxJS", usedIn: [] },
      { code: "backbonedotjs", name: "Backbone.js", usedIn: [] },
    ],
  },
  {
    group: "Styling & Design",
    skills: [
      { code: "tailwindcss", name: "Tailwind CSS", usedIn: ["Stream Mind", "NSB Weather"] },
      { code: "bootstrap", name: "Bootstrap", usedIn: [] },
      { code: "figma", name: "Figma", usedIn: [] },
    ],
  },
  {
    group: "Tooling",
    skills: [
      { code: "jest", name: "Jest", usedIn: ["Stream Mind"] },
      { code: "git", name: "Git", usedIn: [] },
      { code: "nodedotjs", name: "Node.js", usedIn: ["Stream Mind"] },
      { code: "githubactions", name: "GitHub Actions", usedIn: [] },
    ],
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "OpenText",
    position: "Software Engineer",
    location: "Hyderabad, India",
    timeline: "Jul 2023 — Present",
    details: [
      "Led the complete redesign and integration of the application onto a new design system — consistency without regressions.",
      "Migrated the admin panel from Backbone.js to React, improving maintainability and developer velocity.",
      "Hunted down memory leaks in the CMS caused by improper unmount cleanup; shipped new features on top.",
    ],
  },
  {
    id: 2,
    company: "Keka HR",
    position: "SDE-1, Frontend",
    location: "Hyderabad, India",
    timeline: "Aug 2021 — Jun 2023",
    details: [
      "Led UI development for the Attendance and Timesheet modules — scalable, user-friendly, heavily used.",
      "Built reusable components and documentation that streamlined the team's workflow.",
      "Cut unnecessary API calls with debouncing and caching; responsiveness went up, server bills went down.",
    ],
  },
  {
    id: 3,
    company: "Keka HR",
    position: "SDE-1 Frontend Intern",
    location: "Remote, India",
    timeline: "Feb 2021 — Aug 2021",
    details: [
      "Hands-on with HTML, CSS, JavaScript, Angular, responsive design, cross-browser quirks — and built a documentation site from scratch.",
    ],
  },
];

export const CERTIFICATES = [
  {
    title: "Namaste React",
    href: "https://namastedev.com/manav10799/certificates/namaste-react",
  },
  {
    title: "Namaste JavaScript",
    href: "https://namastedev.com/manav10799/certificates/namaste-javascript",
  },
];

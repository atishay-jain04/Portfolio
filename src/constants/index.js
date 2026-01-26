/**
 * Application constants and configuration
 */

// Personal Information
export const PERSONAL_INFO = {
  name: 'Atishay Jain',
  title: 'Frontend Developer & Full-Stack Developer',
  email: 'atishayjain0504@gmail.com',
  github: 'https://github.com/atishay-jain04',
  linkedin: 'https://www.linkedin.com/in/atishay-jain-690604290/',
  twitter: 'https://twitter.com/yourhandle',
  resumeUrl: 'https://drive.google.com/file/d/1qVj6KdpD-8A2gU8Uq8cQ1_YeoheemQkx/view?usp=sharing',
};

// Navigation Links
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Tech Stack Categories
export const TECH_STACK = {
  frontend: [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Framer Motion',
    'TypeScript',
    'Next.js',
  ],
  backend: [
    'Node.js',
    'Express',
    'Python',
  ],
  languages: [
    'C++',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
  ],
  tools: [
    'Git',
    'VS Code',
    'Figma',
    'Postman',
  ],
  backend_services: [
    'Appwrite',
  ],
};

// Projects Data (placeholder - will be populated with actual projects)
export const PROJECTS = [
  {
    id: 1,
    title: 'SettleUp',
    description: 'A clean, transparent expense splitting app with authentication, group management, multiple split types (equal, exact, percentage), debt simplification, and real-time balance calculations.',
    image: '/src/project/settleup.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Vite'],
    demoUrl: 'https://settleup.jainatishay.me',
    githubUrl: 'https://github.com/atishay-jain04',
    featured: true,
    year: '2026',
  },
  {
    id: 2,
    title: 'IntelliSphere',
    description: 'An AI-powered personal study companion that generates personalized learning paths, summarizes complex topics, and creates practice questions with adaptive learning based on student progress.',
    image: '/src/project/intellisphere.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Appwrite', 'Gemini API'],
    demoUrl: 'https://intellisphere.jainatishay.me',
    githubUrl: 'https://github.com/atishay-jain04',
    featured: true,
    year: '2025',
  },
  // Add more projects as needed
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/atishay-jain04',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/atishay-jain-690604290/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:atishayjain0504@gmail.com',
    icon: 'email',
  },
];

// About Section
export const ABOUT_TEXT = {
  greeting: "Hi, I'm Atishay Jain",
  tagline: 'Full-Stack Developer',
  description: `I'm a passionate full-stack developer specializing in building modern web applications.
    I love creating interactive and user-friendly interfaces with robust backend systems. With expertise
    in React, Node.js, and modern web technologies, I create seamless digital experiences that combine
    beautiful design with powerful functionality.`,
  highlights: [
    'Building responsive and interactive web applications',
    'Full-stack development with React & Node.js',
    'Clean code and best practices advocate',
    'Continuous learner and tech enthusiast',
  ],
};

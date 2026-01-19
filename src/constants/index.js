/**
 * Application constants and configuration
 */

// Personal Information
export const PERSONAL_INFO = {
  name: 'Atishay Jain',
  title: 'Full-Stack Developer & AIML Enthusiast',
  email: 'your.email@example.com',
  github: 'https://github.com/atishay-jain04',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  resumeUrl: '/resume.pdf',
};

// Navigation Links
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'tech-stack', label: 'Tech Stack', href: '#tech-stack' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'resume', label: 'Resume', href: '#resume' },
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
  ],
  backend_services: [
    'Appwrite',
  ],
};

// Projects Data (placeholder - will be populated with actual projects)
export const PROJECTS = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your amazing project and what it does.',
    image: '/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another awesome project showcasing your skills.',
    image: '/projects/project2.jpg',
    tags: ['Python', 'TensorFlow', 'Flask'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
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
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'email',
  },
];

// About Section
export const ABOUT_TEXT = {
  greeting: "Hi, I'm Atishay Jain",
  tagline: 'Full-Stack Developer & AIML Enthusiast',
  description: `I'm a passionate full-stack developer with a strong interest in artificial intelligence
    and machine learning. I love building interactive and user-friendly web applications that solve
    real-world problems. With expertise in modern web technologies and a keen eye for design, I create
    seamless digital experiences.`,
  highlights: [
    'Building responsive and interactive web applications',
    'Implementing AI/ML solutions',
    'Clean code and best practices advocate',
    'Continuous learner and tech enthusiast',
  ],
};

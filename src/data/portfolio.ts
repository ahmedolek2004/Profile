/**
 * The single place to edit the portfolio.
 *
 * - Anything left empty ("" or []) is simply not shown on the site.
 * - Optional project fields: `github`, `demo`, `status`.
 * - Add a new section's content here and the matching section appears automatically.
 */

// Resolves files in /public so they also work under the GitHub Pages base path.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export interface Project {
  title: string;
  description: string;
  status?: string; // e.g. "In Progress"
  tech: string[];
  github?: string; // add a URL here to show a GitHub button
  demo?: string; // add a URL here to show a Live Demo button
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  points?: string[]; // only add verified responsibilities
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const portfolio = {
  profile: {
    name: 'Ahmed Abdelhalim',
    initials: 'AA',
    title: 'Frontend Developer | React, TypeScript & JavaScript',
    role: 'Frontend Developer',
    heroStack: 'React · TypeScript · JavaScript',
    tagline:
      'I build responsive websites, practical software projects, and IoT-connected systems.',
    location: 'Alexandria, Egypt',
    availability: 'Open to Internship & Junior Opportunities',
    email: 'ahmedolek2004@gmail.com',
    resumeUrl: asset('resume/Ahmed_Abdelhalim_CV.pdf'),
    photoUrl: asset('images/profile.jpg'), // set to "" to show the AA avatar instead
  },

  about: {
    paragraphs: [
      "I'm an Information Technology student and software developer based in Alexandria, Egypt. My main focus is frontend and web development, and alongside it I work on IoT and embedded-system projects.",
      'I learn by building real projects, solving problems, and turning ideas into working systems. I am looking for internship and junior opportunities, including remote or hybrid roles, where I can keep growing as a developer while contributing to real products.',
    ],
  },

  skills: {
    'Frontend & Web': [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'Angular',
      'Tailwind CSS',
      'Bootstrap',
      'Vite',
    ],
    Programming: ['Python', 'C', 'C++', 'Java', 'PHP', 'Dart'],
    'Backend & Data': [
      'Node.js',
      'REST APIs',
      'Laravel',
      'SQL',
      'Relational Databases',
      'Firebase Realtime Database',
      'Supabase',
    ],
    'IoT & Embedded': [
      'ESP32',
      'Arduino',
      'Embedded C/C++',
      'Sensors',
      'Actuators',
      'Relays',
      'Automation',
      'Serial Communication',
      'Wi-Fi-connected systems',
    ],
    Tools: ['Git', 'GitHub', 'VS Code', 'npm'],
  } as Record<string, string[]>,

  projects: [
    {
      title: 'College Student Helper Platform',
      description:
        'A student-focused web platform for organizing academic resources and making course materials easier to find and access.',
      status: 'In Progress',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'Google Drive API'],
    },
    {
      title: 'Smart Home Energy Management Control System (SHEMCS)',
      description:
        'An IoT energy-monitoring and load-control system built around an ESP32, current and voltage sensors, relays, Firebase, and a web dashboard.',
      tech: ['ESP32', 'ACS712', 'ZMPT101B', '8-Channel Relay', 'Firebase', 'Vue.js'],
    },
    {
      title: 'Personal Developer Portfolio',
      description:
        'This website: a single-page, static portfolio presenting my projects, skills, experience, and contact details.',
      status: 'Continuously Updated',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    },
    {
      title: 'Caesar Cipher App',
      description: 'A desktop application that implements the Caesar cipher.',
      tech: ['Python', 'Tkinter'],
    },
  ] as Project[],

  iot: {
    description:
      'Alongside software development, I work on practical IoT and embedded-system projects involving microcontrollers, sensors, actuators, automation, and connected systems.',
    // Names only: add details here once roles and tech stacks are confirmed.
    otherProjects: ['3D Printing', 'Smart Parking', 'Car Fire Detection', 'CNC'],
  },

  experience: [
    {
      role: 'Student Volunteer',
      organization: 'WE',
      location: 'Alexandria, Egypt',
      period: 'October 2024 – January 2025',
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Borg El Arab Technological University',
      location: 'Alexandria, Egypt',
      period: '2024 – Present',
    },
  ] as EducationItem[],

  // Add your URLs here. Empty values are hidden everywhere on the site.
  social: {
    github: '',
    linkedin: '',
  },
};

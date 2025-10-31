// Navigation item interface
export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

// Work experience interface
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

// Education interface
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements?: string[];
}

// Skill interface
export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  proficiency: number; // 1-100
  icon?: string;
}

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readTime: number; // in minutes
  featured?: boolean;
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social link interface
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

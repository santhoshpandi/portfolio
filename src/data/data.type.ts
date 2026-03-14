
export interface Link {
  name: string,
  url: string
}

export interface Certification {
  name: string,
  image: string,
  institution: string;
  id: string,
  link: string,
  description: string
}

export interface Technology {
  title: string,
  techs: string[]
}

export interface Project {
  id: number;
  title: string;
  image?: string;
  description: string;
  sourceCodeLink?: string;
  previewLink?: string;
  technologies: string[];
  completedAt?: string; // ISO date: "2026-03-10"
}

// Final Data
export interface Data {
  name: string,
  email: string,
  about: string[],
  roles: string[],
  links: Link[],
  certifications: Certification[],
  technologies: Technology[],
  projects: Project[]
}


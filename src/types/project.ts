export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  detailImages: string[];
  mockups: Mockup[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  role: string;
  duration: string;
}

export interface Mockup {
  type: string;
  image: string;
  description: string;
}
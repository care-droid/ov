export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface BlogPost {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

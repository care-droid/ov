export type Category =
  | "Web Development"
  | "IT Services"
  | "eCommerce"
  | "Digital Marketing"
  | "SEO"
  | "B2B Ordering";

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: Category;
  tags: string[];
  readTime: string;
  icon: React.ReactNode;
  gradient: string;
  featured?: boolean;
  content?: string;
};

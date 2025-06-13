// apps/landing/src/lib/types/landingpage.ts

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  bio?: string;
};
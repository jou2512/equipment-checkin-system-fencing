// types/landingpages.ts


// Types for the About Page

/**
 * Represents a Team Member for the about Page
 * @interface
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
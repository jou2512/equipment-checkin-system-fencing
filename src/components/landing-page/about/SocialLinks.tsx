import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";


interface SocialLinksProps {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  twitter,
  linkedin,
  github,
}) => (
  <div className="mt-2 flex space-x-4">
    {twitter && (
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <SiX
          color="#000000"
          className="h-6 w-6 text-blue-500 hover:text-blue-700 transition duration-300"
        />
      </a>
    )}
    {linkedin && (
      <SiLinkedin
        color="#0A66C2"
        className="h-6 w-6 text-blue-700 hover:text-blue-900 transition duration-300"
      />
    )}
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer">
        <SiGithub
          color="#181717"
          className="h-6 w-6 text-gray-900 hover:text-gray-700 transition duration-300"
        />
      </a>
    )}
  </div>
);

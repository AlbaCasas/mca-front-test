import { FaGithub, FaLinkedin, FaSearch } from 'react-icons/fa';

export const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  search: <FaSearch />
};

export type Icon = keyof typeof icons;

import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
const SocialIcons = () => (
  <div className="flex space-x-2">
    <a
      href="https://github.com/angelohoeung"
      className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
    >
      <FiGithub className="h-7 w-7" />
    </a>
    <a
      href="https://www.linkedin.com/in/hoeung"
      className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
    >
      <FiLinkedin className="h-7 w-7" />
    </a>
    <a
      href="mailto:hi@hoeung.ca"
      className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
      target="_blank"
      rel="noopener noreferrer"
      title="Email"
    >
      <FiMail className="h-7 w-7" />
    </a>
  </div>
);

export default SocialIcons;

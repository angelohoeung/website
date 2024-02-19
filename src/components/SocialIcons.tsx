import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
const SocialIcons = () => (
  <div className="flex space-x-2">
    <a
      href="https://github.com/angelohoeung"
      className="hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white"
      target="_blank"
      title="GitHub"
    >
      <FiGithub className="w-7 h-7" />
    </a>
    <a
      href="https://www.linkedin.com/in/angelohoeung"
      className="hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white"
      target="_blank"
      title="LinkedIn"
    >
      <FiLinkedin className="w-7 h-7" />
    </a>
    <a
      href="mailto:angelohoeung@gmail.com"
      className="hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white"
      target="_blank"
      title="Email"
    >
      <FiMail className="w-7 h-7" />
    </a>
  </div>
);

export default SocialIcons;

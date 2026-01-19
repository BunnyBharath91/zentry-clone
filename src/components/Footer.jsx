import { FaTwitter, FaLink, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://bharath-kumar-borra.onrender.com", icon: <FaLink /> },
  { href: "https://www.linkedin.com/in/bharathkumarb1", icon: <FaLinkedin /> },
  { href: "https://x.com/BharathKumar960", icon: <FaTwitter /> },
  { href: "http://instagram.com/__bunny_bharath_", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Built by Bharath Kumar Borra
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-center text-sm font-light md:text-right">
          Inspired by the 2025 version of{" "}
          <a
            href="https://zentry.com"
            target="_blank"
            className="hover:underline "
          >
            zentry.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

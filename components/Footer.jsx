import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container text-white w-full flex flex-col items-center p-2">
      <div className="flex my-8 mt-20 gap-6">
        <a
          href="https://github.com/Amit-code-eng"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-icon">
            <AiFillGithub />
          </div>
        </a>
        <a
          href="mailto: amitdilipjaiswal191220@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-icon">
            <AiOutlineMail />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/amit-jaiswal-b062811a3"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-icon">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <p className="text-sm font-mono mb-12 tracking-widest copyright-text ">
        AMIT JAISWAL <span>&#169;{new Date().getFullYear()}</span>
      </p>
      <div className="move-to-top">
        <a href="#home-container">
          <FaAngleDoubleUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

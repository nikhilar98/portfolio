import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-text">Nikhil A R</span>
              <span className="footer__logo-bracket">/&gt;</span>
            </a>
            <p className="footer__tagline">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer__links-section">
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer__links-section">
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__socials">
              <a href="https://github.com/nikhilar98/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nikhil-a-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Nikhil A R. Built with{' '}
            <FiHeart className="footer__heart" size={14} /> and React.
          </p>
          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

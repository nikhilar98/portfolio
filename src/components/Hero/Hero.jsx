import {
  SiReact, SiNodedotjs, SiJavascript,
  SiDocker, SiFigma, SiGit,
  SiNextdotjs, SiMongodb, SiRedux,
  SiExpress, SiRedis, SiAmazonwebservices,
  SiHtml5, SiCss3, SiJenkins, SiPostman
} from 'react-icons/si';
import './Hero.css';

const techIcons = [
  { icon: <SiHtml5 />, color: '#e34f26', name: 'HTML5' },
  { icon: <SiCss3 />, color: '#1572b6', name: 'CSS3' },
  { icon: <SiJavascript />, color: '#f7df1e', name: 'JavaScript' },
  { icon: <SiReact />, color: '#61dafb', name: 'React.js' },
  { icon: <SiNextdotjs />, color: '#ffffff', name: 'Next.js' },
  { icon: <SiRedux />, color: '#764abc', name: 'Redux' },
  { icon: <SiNodedotjs />, color: '#339933', name: 'Node.js' },
  { icon: <SiExpress />, color: '#ffffff', name: 'Express.js' },
  { icon: <SiMongodb />, color: '#47a248', name: 'MongoDB' },
  { icon: <SiRedis />, color: '#dc382d', name: 'Redis' },
  { icon: <SiDocker />, color: '#2496ed', name: 'Docker' },
  { icon: <SiAmazonwebservices />, color: '#ff9900', name: 'AWS' },
  { icon: <SiGit />, color: '#f05032', name: 'Git' },
  { icon: <SiJenkins />, color: '#d24939', name: 'Jenkins' },
  { icon: <SiFigma />, color: '#f24e1e', name: 'Figma' },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background effects */}
      <div className="hero__bg">
        <div className="hero__bg-glow" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__container container">
        {/* Name Intro */}
        <div className="hero__name-intro">
          <span className="hero__greeting">&lt;Hello World /&gt;</span>
          <h2 className="hero__name">
            <span className="hero__name-first">Nikhil</span>
            <span className="hero__name-last">A R</span>
            <span className="hero__cursor">_</span>
          </h2>
          <span className="hero__role">Software Engineer</span>
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          Building <span className="gradient-text">Full-Stack</span> Web
          <br />Applications That Scale
        </h1>

        <p className="hero__subtitle">
          4+ years of experience crafting performant, scalable applications
          <br />with the MERN stack — from intuitive UIs to robust backend systems.
        </p>

        <a href="#projects" className="btn btn-primary hero__cta">
          Get Started
        </a>

        {/* Tech icons */}
        <div className="hero__tech-icons">
          {techIcons.map((tech, index) => (
            <div
              className="hero__tech-icon"
              key={index}
              style={{ color: tech.color }}
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import {
  SiReact, SiNodedotjs, SiTypescript, SiJavascript,
  SiPython, SiDocker, SiFigma, SiGit,
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb
} from 'react-icons/si';
import './Hero.css';

const techIcons = [
  { icon: <SiReact />, color: '#61dafb', name: 'React' },
  { icon: <SiNextdotjs />, color: '#ffffff', name: 'Next.js' },
  { icon: <SiTypescript />, color: '#3178c6', name: 'TypeScript' },
  { icon: <SiJavascript />, color: '#f7df1e', name: 'JavaScript' },
  { icon: <SiNodedotjs />, color: '#339933', name: 'Node.js' },
  { icon: <SiPython />, color: '#3776ab', name: 'Python' },
  { icon: <SiTailwindcss />, color: '#06b6d4', name: 'Tailwind' },
  { icon: <SiPostgresql />, color: '#4169e1', name: 'PostgreSQL' },
  { icon: <SiMongodb />, color: '#47a248', name: 'MongoDB' },
  { icon: <SiDocker />, color: '#2496ed', name: 'Docker' },
  { icon: <SiGit />, color: '#f05032', name: 'Git' },
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
          Crafted for <span className="gradient-text">Engineers</span> to
          <br />showcase their work
        </h1>

        <p className="hero__subtitle">
          Helping startups and brands build scalable, performant applications
          <br />and elegant solutions for complex engineering challenges.
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

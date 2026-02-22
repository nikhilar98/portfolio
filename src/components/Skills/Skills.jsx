import {
  FiLayout, FiServer, FiDatabase, FiSmartphone,
  FiGitBranch, FiCloud
} from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiAmazonwebservices, SiGit, SiTailwindcss,
  SiRedis, SiGraphql, SiFigma, SiLinux
} from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout />,
    skills: [
      { name: 'React', icon: <SiReact />, level: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 88 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92 },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'GraphQL', icon: <SiGraphql />, level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: <FiDatabase />,
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'Redis', icon: <SiRedis />, level: 75 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <FiCloud />,
    skills: [
      { name: 'Docker', icon: <SiDocker />, level: 82 },
      { name: 'AWS', icon: <SiAmazonwebservices />, level: 78 },
      { name: 'Git', icon: <SiGit />, level: 92 },
      { name: 'Linux', icon: <SiLinux />, level: 80 },
      { name: 'Figma', icon: <SiFigma />, level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// Skills & Tools</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div className="skills__card" key={index}>
              <div className="skills__card-header">
                <div className="skills__card-icon">{category.icon}</div>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>

              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skills__item" key={skillIndex}>
                    <div className="skills__item-info">
                      <span className="skills__item-icon">{skill.icon}</span>
                      <span className="skills__item-name">{skill.name}</span>
                    </div>
                    <div className="skills__item-bar">
                      <div
                        className="skills__item-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

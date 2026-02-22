import { FiLayout, FiServer, FiZap, FiTool } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FiLayout />,
    skills: [
      'HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js',
      'Redux', 'Progressive Web Apps', 'MSAL',
      'ES6 Promises', 'Async/Await', 'Local Storage',
      'Core UI', 'Material UI', 'Figma',
    ],
  },
  {
    title: 'Performance Optimizations',
    icon: <FiZap />,
    skills: [
      'Lighthouse Optimization', 'Service Workers',
      'Code Splitting', 'Lazy Loading',
      'Memoization', 'Rendering Optimization',
    ],
  },
  {
    title: 'Backend Development',
    icon: <FiServer />,
    skills: [
      'Node.js', 'Express.js', 'REST API', 'JWT',
      'AWS (S3, EC2)', 'Bcrypt.js',
      'MongoDB', 'Couchbase', 'Redis',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <FiTool />,
    skills: [
      'VS Code', 'Git', 'Docker', 'Azure DevOps',
      'Postman', 'Jenkins', 'CI/CD Pipelines',
      'GitHub Copilot', 'Claude Code', 'Grafana', 'MCP Servers',
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

              <div className="skills__tags">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skills__tag" key={skillIndex}>
                    {skill}
                  </span>
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

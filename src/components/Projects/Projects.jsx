import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Projects.css';

const caseStudies = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'An innovative full-stack platform for modern online retail with real-time inventory and Stripe payments.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
    metrics: [
      { label: 'Performance', value: '98%' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    title: 'AI Content Generator',
    subtitle: 'An AI-powered platform leveraging OpenAI APIs for automated content creation across multiple formats.',
    tags: ['Next.js', 'Node.js', 'AWS S3', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Speed', value: '2x' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Deep dives into some of the projects I've built and the problems they solve.
          </p>
        </div>

        <div className="projects__list">
          {caseStudies.map((project, index) => (
            <div className="projects__card" key={index}>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-subtitle">{project.subtitle}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag, i) => (
                    <span className="projects__card-tag" key={i}>{tag}</span>
                  ))}
                </div>

                <div className="projects__card-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                      View case study <FiArrowRight size={14} />
                    </a>
                  )}
                  <div className="projects__card-icons">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="projects__card-visual">
                <div className="projects__card-preview">
                  <div className="projects__card-mockup">
                    <div className="projects__card-browser-bar">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="projects__card-screen" />
                  </div>
                </div>
                {project.metrics && (
                  <div className="projects__card-metrics">
                    {project.metrics.map((metric, i) => (
                      <div className="projects__card-metric" key={i}>
                        <span className="projects__card-metric-value">{metric.value}</span>
                        <span className="projects__card-metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

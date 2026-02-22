import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const caseStudies = [
  {
    title: 'Community Crafter',
    subtitle:
      'A full-stack web application that connects communities with tutors. Community Heads can post class requirements and tutors can discover opportunities within a set radius, send proposals, and deliver teaching sessions — from academics to sports, dance, and music.',
    tags: [
      'React.js',
      'Material UI',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS S3',
      'Stripe',
      'JWT',
      'React Leaflet',
      'Nodemailer',
    ],
    github: 'https://github.com/nikhilar98/communityCrafter-frontend',
    githubBackend: 'https://github.com/nikhilar98/communityCrafter-backend',
    live: 'https://community-crafter-frontend.vercel.app/',
    highlights: [
      'Booking & proposal system for tutors and community heads',
      'Map view with radius-based requirement discovery',
      'Secure Stripe payment integration',
      'JWT auth with role-based access control',
      'Email notifications via Nodemailer',
      'AWS S3 image uploads with Multer',
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

                {project.highlights && (
                  <ul className="projects__card-highlights">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="projects__card-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__card-link">
                      Live Demo <FiExternalLink size={14} />
                    </a>
                  )}
                  <div className="projects__card-icons">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Frontend GitHub">
                        <FiGithub size={18} /> <span>Frontend</span>
                      </a>
                    )}
                    {project.githubBackend && (
                      <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" aria-label="Backend GitHub">
                        <FiGithub size={18} /> <span>Backend</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

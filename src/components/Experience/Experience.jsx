import './Experience.css';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp Inc.',
    period: 'Jan 2023 - Present',
    current: true,
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Studios',
    period: 'Mar 2021 - Dec 2022',
    current: false,
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: 'Jun 2019 - Feb 2021',
    current: false,
  },
  {
    title: 'Software Intern',
    company: 'CodeLab',
    period: 'Jan 2019 - May 2019',
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience__list">
          {experiences.map((exp, index) => (
            <div className="experience__row" key={index}>
              <div className="experience__left">
                <h3 className="experience__title">{exp.title}</h3>
              </div>
              <div className="experience__right">
                <span className="experience__company">{exp.company}</span>
                <span className={`experience__period ${exp.current ? 'experience__period--current' : ''}`}>
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

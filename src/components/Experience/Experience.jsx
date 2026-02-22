import './Experience.css';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Air India',
    period: 'Mar 2024 - Present',
    location: 'Kochi',
    current: true,
    description:
      'Played a vital role in the development of In-Flight Entertainment (IFE) software, In-Flight Connectivity (IFC) wifi portal and Admin portals for the IFE and IFC Systems.',
    sections: [
      {
        heading: 'WiFi Portal Application (In-Flight Connectivity System)',
        items: [
          'Designed and developed passenger WiFi portal enabling validation using PNR authentication.',
          'Implemented secure passenger verification workflow integrated with backend services.',
          'Built dynamic UI for displaying multiple WiFi package plans with pricing and duration details.',
          'Implemented secure purchase flow allowing passengers to select and buy WiFi packages onboard.',
          'Managed redirection to WiFi connected landing page after successful activation.',
          'Integrated real-time APIs for validation, package activation, and wifi status updates.',
        ],
      },
      {
        heading: 'Seatback Product Application (In-Flight Entertainment System)',
        items: [
          'Developed reusable React-based UI components for in-flight entertainment seatback systems.',
          'Built modular and scalable component architecture for embedded aviation hardware.',
          'Optimized UI rendering performance for hardware-constrained onboard devices.',
          'Ensured responsive and accessible passenger-facing interfaces.',
        ],
      },
      {
        heading: 'IFE and IFC Admin Portal Applications',
        items: [
          'Developed enterprise-grade admin portal for operational and passenger data management.',
          'Implemented advanced data tables with filtering, sorting, and efficient large dataset rendering.',
          'Built dynamic graphs and visual dashboards for operational insights and reporting.',
          'Applied performance optimization techniques to eliminate UI lag under heavy data loads.',
        ],
      },
    ],
  },
  {
    title: 'Application Development Associate',
    company: 'Accenture',
    period: 'Jan 2021 - Apr 2023',
    location: 'Bangalore',
    current: false,
    description:
      'Worked on a booking application developed for the hospitality industry, specifically catering to hotels, resorts, and parks. Developed features and APIs with React JS, React Router, Redux, HTML, and CSS for feature development and Node JS and Express JS for API development. This project was undertaken for a prominent US-based client.',
    sections: [
      {
        heading: 'Roles and Responsibilities',
        items: [
          'Aligned development with client requirements by 95%, exceeding expectations.',
          'Collaborated with 3 developers to develop intuitive application features and make them responsive.',
          'Enhanced application performance and user satisfaction by 15%.',
          'Improved the booking process efficiency by 20%, enabling users to seamlessly reserve integrated rooms and ticket packages or standalone tickets for a diverse range of world-class parks and events.',
          'Reduced application errors by 98%, ensuring higher system reliability.',
          'Improved project delivery timelines by 28% through active participation in sprint cycles and providing demos.',
          'Followed Agile methodology practices and used Jira.',
        ],
      },
    ],
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
            <div className="experience__card" key={index}>
              <div className="experience__header">
                <div className="experience__header-left">
                  <h3 className="experience__title">
                    {exp.company} <span className="experience__separator">|</span> {exp.title}
                  </h3>
                  <span className={`experience__period ${exp.current ? 'experience__period--current' : ''}`}>
                    {exp.period} | {exp.location}
                  </span>
                </div>
              </div>

              <p className="experience__description">{exp.description}</p>

              {exp.sections.map((section, sIdx) => (
                <div className="experience__section" key={sIdx}>
                  <h4 className="experience__section-heading">{section.heading}</h4>
                  <ul className="experience__items">
                    {section.items.map((item, iIdx) => (
                      <li className="experience__item" key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

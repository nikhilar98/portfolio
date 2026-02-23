import './Experience.css';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Air India',
    period: 'Mar 2024 - Present',
    location: 'Kochi',
    current: true,
    description:
      'Played a vital role in the development of In-Flight Entertainment (IFE) software, In-Flight Connectivity (IFC) WiFi portal, and Admin portals for the IFE and IFC systems.',
    sections: [
      {
        heading: 'WiFi Portal Application (In-Flight Connectivity System)',
        items: [
          'Built a passenger WiFi portal with PNR authentication serving 300+ passengers/flight across 50+ daily flights with 99.5% session reliability, reducing support escalations by ~30%.',
          'Developed a dynamic UI rendering 5+ WiFi package tiers with real-time pricing and availability, contributing to a ~20% increase in onboard WiFi adoption.',
          'Engineered PCI-compliant purchase flow handling 800+ daily transactions with sub-2s checkout.',
          'Integrated real-time APIs for validation, package provisioning, session heartbeat monitoring, and WiFi usage status.',
        ],
      },
      {
        heading: 'Seatback Product Application (In-Flight Entertainment System)',
        items: [
          'Developed 30+ production React components (media players, navigation menus, carousels, accessibility overlays) for seatback systems deployed across 200+ seats per aircraft.',
          'Achieved ~60% render performance improvement on embedded hardware and reduced touch-input latency by ~45% through virtualisation and optimised React reconciliation.',
          'Implemented internationalisation (i18n) supporting 10+ languages with dynamic locale switching, enabling seamless multilingual passenger experiences across global airline routes.',
          'Ensured WCAG 2.1 AA compliance across 3 display resolutions with a 95+ Lighthouse accessibility score, meeting airline regulatory certification requirements.',
          'Built a BYOD version of the IFE application, allowing 300+ passengers/flight to access entertainment on personal devices, increasing content engagement by ~3x with responsive support across 3+ device types.',
        ],
      },
      {
        heading: 'IFE and IFC Admin Portal Applications',
        items: [
          'Built enterprise admin portals used by 80+ operations staff for centralised management of 500K+ passenger records, flight configs, and system diagnostics.',
          'Engineered virtualised data tables rendering 100K+ rows at sub-200ms response with server-side filtering, multi-column sorting, and inline editing.',
          'Developed 12+ interactive dashboards with charts and heatmaps processing 1M+ data points, enabling anomaly detection ~3x faster than prior manual reporting.',
          'Reduced initial bundle load time by ~50% and runtime memory by ~30% via code splitting, memoisation, lazy loading, and Web Worker offloading.',
          'Implemented role-based access control (RBAC) across 3+ permission tiers using MSAL with audit logging, ensuring compliance with airline data governance policies.',
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
      'Worked on a booking application developed for the hospitality industry, specifically catering to hotels, resorts, and parks. Built frontend features with React JS, React Router, Redux, HTML, and CSS, and developed backend APIs with Node JS and Express JS. This project was undertaken for a prominent US-based client.',
    sections: [
      {
        heading: 'Roles and Responsibilities',
        items: [
          'Achieved 95% alignment with client requirements, exceeding expectations.',
          'Collaborated with 3 developers to develop intuitive application features and make them responsive.',
          'Enhanced application performance and user satisfaction by 15%.',
          'Improved booking process efficiency by 20%, enabling users to seamlessly reserve integrated rooms and ticket packages or standalone tickets for a diverse range of world-class parks and events.',
          'Reduced application errors by 98%, ensuring higher system reliability.',
          'Improved project delivery timelines by 28% by actively participating in sprint cycles and delivering demos.',
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

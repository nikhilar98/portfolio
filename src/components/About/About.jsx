import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">Crafting Solutions</span>
          </h2>
          <p className="section-subtitle">
            A brief introduction to who I am and what drives me as a software engineer.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <h3 className="about__heading">
              I'm a Software Engineer who loves turning ideas into reality.
            </h3>
            <p className="about__text">
              With over 4+ years of experience in full-stack development, I specialize in 
              building scalable web applications using modern technologies. My journey in 
              software engineering started with a curiosity about how things work on the 
              internet, and it has evolved into a deep passion for creating impactful 
              digital experiences.
            </p>
            <p className="about__text">
              I believe in writing clean, maintainable code and following best practices.
            </p>

            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-label">Name</span>
                <span className="about__detail-value">Nikhil A R</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Email</span>
                <span className="about__detail-value">nikhilar98@gmail.com</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Location</span>
                <span className="about__detail-value">Bangalore, Karnataka</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Availability</span>
                <span className="about__detail-value about__detail-value--available">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

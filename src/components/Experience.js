import styles from "./Projects.module.css"
function Experience() {
  return (
    <div className={styles.outerdiv}>
      <section className="container my-5" id="experience-upcode">
        <h2 className="mb-4">Work Experience</h2>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Upcode Software Labs, Kerala</h4>
            <p className="card-text">
              <strong>Position:</strong> MERN Stack Developer
            </p>
            <p className="card-text">
              <strong>Duration:</strong> November 2025 – Present
            </p>
            <p className="card-text">
              Developing scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Building reusable UI components, REST APIs, JWT authentication, and database-driven features while following modern development practices.
            </p>
            <p className="card-text"><strong>Highlights</strong></p>
            <ul className="ps-3">
              <li>🚀 Built reusable React components and responsive interfaces</li>
              <li>🔐 Implemented JWT authentication and protected routes</li>
              <li>⚙️ Developed REST APIs with Node.js and Express.js</li>
              <li>🗄️ Designed MongoDB schemas and backend integrations</li>
              <li>🔄 Collaborated using Git/GitHub workflows</li>
            </ul>

            <p className="card-text"><strong>Tech Stack</strong></p>
            <ul className="ps-3">
              React.js • Next.js • TypeScript • Node.js • Express.js • MongoDB • JWT • REST APIs • Material UI • Git
            </ul>
          </div>
        </div>
      </section>
      
      
      <section className="container my-5" id="experience-accenture">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Accenture Solutions Private Ltd, India</h4>
            <p className="card-text">
              <strong>Position:</strong> Application Development Analyst
            </p>
            <p className="card-text">
              <strong>Duration:</strong> 2021 – 2025
            </p>
            <p className="card-text">
              Delivered enterprise web application enhancements across frontend, backend, and database layers. Worked on React-based UI development, SQL database management, production troubleshooting, cloud deployments, and automation while supporting business-critical applications.
            </p>
            <p className="card-text"><strong>Highlights</strong></p>
            <ul className="ps-3">
              <li>💻 Built and enhanced enterprise web application features using React.js and JavaScript</li>
              <li>🗄️ Managed SQL Server, MySQL, and MSSQL database changes</li>
              <li>🔍 Resolved production issues through debugging and root-cause analysis</li>
              <li>☁️ Automated deployment activities for GCP-hosted applications</li>
              <li>🔄 Followed Git, CI/CD, and enterprise release processes</li>
            </ul>

            <p className="card-text"><strong>Tech Stack</strong></p>
            <ul className="ps-3">
             React.js • JavaScript • HTML5 • CSS3 • Bootstrap • SQL Server • MySQL • MSSQL • GCP • PowerShell • Git
            </ul>
          </div>
        </div>
      </section>  

      <section className="container my-5" id="experience-nuroil">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Nuroil Trading LLC, Sharjah</h4>
            <p className="card-text">
              <strong>Position:</strong> Application Developer
            </p>
            <p className="card-text">
              <strong>Duration:</strong> 2020
            </p>
            <p className="card-text">
              Developed an internal HRMS platform by gathering business requirements, building application modules, designing database solutions, and creating reports to improve HR operations and decision-making.
            </p>
            <p className="card-text"><strong>Key Responsibilities & Achievements:</strong></p>
            <ul className="ps-3">
              <li>👥 Developed HRMS modules for onboarding, leave, payroll, and performance tracking</li>
              <li>🗄️ Designed SQL Server database structures and backend logic</li>
              <li>🔄 Integrated systems to maintain consistent business data</li>
              <li>📊 Built reports and dashboards for operational insights</li>
              <li>🧪 Performed testing and debugging before production deployment</li>
            </ul>
            <p className="card-text"><strong>Tech Stack</strong></p>
            <ul className="ps-3">
             SQL Server • C# • .NET • JavaScript • HTML • CSS • Database Design • Reporting
            </ul>
          </div>
        </div>
      </section>
 
    </div>
  );
}

export default Experience;
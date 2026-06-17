import styles from "./Projects.module.css"
function Projects() {
  return (
    <div className={styles.outerdiv}>
        <section className="container my-5" id="projects">
          <h2 className="mb-4">Project Experience</h2>

          <section className="container my-5" id="project-hrms">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">E-Commerce Web Application</h4>
              <p className="card-text"><strong>Role:</strong> MERN Stack Developer (Intern)</p>

              <p className="card-text"><strong>Description:</strong><br/>
                Developed a full-stack e-commerce web application as part of MERN stack training at Upcode, focusing on building scalable and user-friendly web interfaces with secure backend integration.

                Implemented core functionalities such as product browsing, cart management, order placement, and user authentication. Built RESTful APIs using Node.js and Express.js and integrated them with a React.js frontend to enable seamless end-to-end communication.

                Designed MongoDB schemas for users, products, carts, and orders, ensuring efficient data storage and retrieval. Implemented JWT-based authentication and authorization to secure user sessions and protect application routes.

                Collaborated in a structured development workflow using Git and GitHub for version control and project tracking.
              </p>

              <p className="card-text"><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB, JWT, Bootstrap, Git, GitHub, PostgreSQL, Next.js, Material UI, Redux, HTML, CSS, Javascript, REST APIs</p>
            </div>
          </div>
        </section>

          <section className="container my-5" id="project-hrms">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Handled multiple web apps — Royal Mail Webapps team</h4>
              <p className="card-text"><strong>Role:</strong> Application Developer / L2–L3 Support (CR & Enhancements)</p>

              <p className="card-text"><strong>Description:</strong><br/>
                Worked on multiple enterprise-grade web applications for Royal Mail, contributing to both application development and production support activities. Involved in implementing business-driven change requests, enhancing existing features, and ensuring smooth application performance across environments.

                Responsible for analyzing and resolving production incidents through debugging, log analysis, and root-cause identification. Worked closely with cross-functional teams to deliver timely fixes, improvements, and system enhancements.

                Also contributed to database-level changes in SQL Server, application testing, and deployment support activities to ensure stable and reliable application releases.
              </p>

              <p className="card-text"><strong>Technologies:</strong> React.js, ASP.NET Core (C#), JSON, HTML, CSS, JavaScript, MSSQL, PowerShell, ServiceNow, GCP, Git.
              </p>
            </div>
          </div>
        </section>

        <section className="container my-5" id="project-hrms">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title">HRMS Application</h4>
            <p className="card-text">
              <strong>Role:</strong> Application Developer / Tester
            </p>

            <p className="card-text">
              <strong>Description:</strong><br/>
              Contributed to the development and enhancement of a Human Resource Management System (HRMS) for Nuroil Trading LLC, aimed at automating and streamlining key HR operations such as employee management and workflow processing.

              Involved in designing and implementing application features, performing functional testing, and supporting backend and database-related updates. Worked closely on improving system reliability, ensuring data accuracy, and enhancing overall application performance across multiple HR modules.

              Participated in debugging issues, validating application behavior, and ensuring smooth execution of business workflows in both development and testing environments.
            </p>

            <p className="card-text">
              <strong>Technologies:</strong><br/>
              ASP.NET Core (C#), HTML, CSS, MVC architecture, MSSQL, Visual Studio
            </p>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default Projects;
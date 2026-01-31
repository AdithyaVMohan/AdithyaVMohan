import styles from "./Projects.module.css"
function Projects() {
  return (
    <div className={styles.outerdiv}>
        <section className="container my-5" id="projects">
          <h2 className="mb-4">Project Experience</h2>

          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Handled multiple web apps — Royal Mail Webapps team</h4>
              <p className="card-text"><strong>Role:</strong> .Net Developer / L3, L2 Support</p>

              <p className="card-text"><strong>Description:</strong><br/>
                As a member of the Accenture Webapps team at Accenture Solutions, I improved various
                web applications by applying code changes based on requirements, resolving incidents,
                and optimizing support processes for better service delivery.
              </p>

              <p className="card-text"><strong>Technologies:</strong> React, ASP.Net Core (C#), Visual Studio 17,
                MSSQL, PowerShell, Jira, ServiceNow, GCP
              </p>
            </div>
          </div>
        </section>

        <section className="container my-5" id="project-hrms">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="card-title">HRMS Application</h4>
            <p className="card-text">
              <strong>Role:</strong> .Net Developer / Tester
            </p>

            <p className="card-text">
              <strong>Description:</strong><br/>
              As a dedicated member of the project team, I actively contributed to the successful
              development and implementation of a comprehensive Human Resource Management System
              (HRMS) for Nuroil Trading LLC. The HRMS aimed to streamline and automate various HR
              processes, fostering efficiency and enhancing overall organizational effectiveness.
            </p>

            <p className="card-text">
              <strong>Languages & Tools:</strong><br/>
              ASP.Net (C#), Visual Studio 17
            </p>

            <p className="card-text">
              <strong>Database:</strong><br/>
              SQL Server
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
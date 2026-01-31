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
              <strong>Position:</strong> Intern – MERN Stack Developer
            </p>
            <p className="card-text">
              <strong>Duration:</strong> November 2025 – Present
            </p>

            <p className="card-text"><strong>Key Responsibilities & Achievements:</strong></p>
            <ul className="ps-3">
              <li>Assisting in the development and maintenance of full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
              <li>Collaborating with the development team to build responsive UI components in React and integrate them with backend APIs.</li>
              <li>Participating in code reviews, feature planning sessions, and technical discussions.</li>
              <li>Debugging issues, writing clean code, and optimizing application performance for a better user experience.</li>
              <li>Working with RESTful APIs to handle data retrieval and manipulation securely and efficiently.</li>
              <li>Supporting backend development tasks using Node.js and Express, including routing, middleware, and database interactions with MongoDB.</li>
              <li>Learning agile development practices and contributing to sprint deliverables.</li>
              <li>Improving version control skills using Git and collaborating through platforms like GitHub.</li>
            </ul>

          </div>
        </div>
      </section>
      
      
      <section className="container my-5" id="experience-accenture">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Accenture Solutions Private Ltd, India</h4>
            <p className="card-text">
              <strong>Position:</strong> Data Engineering Analyst
            </p>
            <p className="card-text">
              <strong>Duration:</strong> 2021 – 2025
            </p>
            <p className="card-text"><strong>Key Responsibilities & Achievements:</strong></p>
            <ul className="ps-3">
              <li>Served as the primary point of contact for incident management, handling multiple incidents and resolving complex technical issues promptly.</li>
              <li>Developed, analyzed, and debugged intricate software and system issues to ensure timely delivery of fixes.</li>
              <li>Functioned as a subject-matter expert for internal web applications, mentoring L2 and L3 support teams.</li>
              <li>Independently managed monthly change requests — implemented front-end and back-end code updates with thorough testing in local and production environments.</li>
              <li>Conducted root-cause analysis and in-depth troubleshooting, trained end-users on updates, and provided continuous assistance, improving user satisfaction and adoption.</li>
              <li>Managed support tickets effectively via ServiceNow and Jira, ensuring accurate documentation and accountability.</li>
              <li>Collaborated with cross-functional teams to implement preventive measures, significantly reducing incident recurrence.</li>
              <li>Utilized Microsoft Office tools to document, report, and resolve issues comprehensively.</li>
              <li>Demonstrated expertise in log and error monitoring, root cause identification, and resolution strategies.</li>
              <li>Contributed to enhancement of multiple Royal Mail web applications through code updates in ASP.NET Core (C#), using Visual Studio; backend support on MSSQL and deployments via GCP and PowerShell.</li>
              <li>Handled monthly Change Requests — writing, testing (local & production), deploying to production, and pushing code updates to Git for version control and CI/CD workflows.</li>
            </ul>
          </div>
        </div>
      </section>  

      <section className="container my-5" id="experience-nuroil">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Nuroil Trading LLC, Sharjah</h4>
            <p className="card-text">
              <strong>Position:</strong> .Net Programmer
            </p>
            <p className="card-text">
              <strong>Duration:</strong> 2020
            </p>

            <p className="card-text"><strong>Key Responsibilities & Achievements:</strong></p>
            <ul className="ps-3">
              <li>Collaborated with HR, IT specialists, and end-users to gather requirements and translate business needs into functional modules (onboarding, performance management, leave tracking, payroll).</li>
              <li>Developed, tested, and implemented custom ASP.NET (C#) modules using Visual Studio and MSSQL.</li>
              <li>Created SQL Server database tables and performed manual testing, including preparation of bug reports and troubleshooting.</li>
              <li>Integrated the HRMS with legacy systems to ensure real-time data consistency across departments.</li>
              <li>Conducted user training sessions and provided ongoing support, addressing queries and facilitating smooth system adoption.</li>
              <li>Managed support tickets and tracked incidents via Jira/ServiceNow while performing root cause analysis and error logging.</li>
              <li>Ensured accuracy and reliability of business-critical HR processes through diligent testing, monitoring, and preventive measures.</li>
              <li>Utilized Microsoft Office tools for documentation, reporting, and audit readiness.</li>
            </ul>

          </div>
        </div>
      </section>
 
    </div>
  );
}

export default Experience;
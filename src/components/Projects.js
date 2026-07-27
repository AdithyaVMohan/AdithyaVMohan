import styles from "./Projects.module.css"
function Projects() {
  return (
    <div className={styles.outerdiv}>
       <section className="container my-5" id="projects">
            <h2 className="mb-4">Project Experience</h2>

             <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title">E-Commerce Web Application</h4>
                <p className="card-text">
                  <strong>Role:</strong> MERN Stack Developer Intern
                </p>
                <p className="card-text">
                  <strong>Description:</strong><br />
                  A full-stack e-commerce platform with authentication, product management,
                  cart management, and order workflows.
                </p>
                <p className="card-text">
                  <strong>Tech:</strong> React | Node | Express | MongoDB | JWT
                </p>
                {/* View Details Button */}
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#ecommerceModal"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Project Details Modal */}
            <div
              className="modal fade"
              id="ecommerceModal"
              tabIndex="-1"
              aria-labelledby="ecommerceModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered mt-5">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ecommerceModalLabel">
                      E-Commerce Web Application
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h6 className="fw-bold">Role</h6>
                    <p>
                      MERN Stack Developer
                    </p>
                    <h6 className="fw-bold">Project Overview</h6>
                    <p>
                      Developed a full-stack e-commerce application using the MERN stack,
                      focusing on scalable frontend architecture, secure authentication,
                      and seamless frontend-backend communication.
                    </p>
                    <h6 className="fw-bold">Key Features</h6>
                    <ul>
                      <li>
                        Product browsing and dynamic product listing
                      </li>
                      <li>
                        User authentication and authorization using JWT
                      </li>
                      <li>
                        Shopping cart management
                      </li>
                      <li>
                        Order placement workflow
                      </li>
                      <li>
                        REST API integration between React frontend and Node backend
                      </li>
                      <li>
                        MongoDB database design for users, products, carts, and orders
                      </li>
                    </ul>
                    <h6 className="fw-bold">Technical Implementation</h6>
                    <ul>
                      <li>
                        Built reusable React.js components for better maintainability
                      </li>
                      <li>
                        Developed RESTful APIs using Node.js and Express.js
                      </li>
                      <li>
                        Implemented JWT-based protected routes
                      </li>
                      <li>
                        Managed application data using MongoDB and Mongoose
                      </li>
                      <li>
                        Used Git and GitHub for version control
                      </li>
                    </ul>
                    <h6 className="fw-bold">Technologies</h6>
                    <p>
                      React.js, Node.js, Express.js, MongoDB, Mongoose, JWT,
                      Bootstrap, JavaScript, HTML5, CSS3, REST APIs, Git, GitHub
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="card-title">
                  CRM Application
                </h4>
                <p className="card-text">
                  <strong>Role:</strong> Full Stack Developer
                </p>
                <p className="card-text">
                  <strong>Description:</strong><br />
                  Developed a CRM application to manage companies, leads, deals,
                  and customer interactions. Built responsive frontend modules using
                  Next.js and Material UI with backend integration for managing
                  business workflows.
                </p>
                <p className="card-text">
                  <strong>Technologies:</strong><br />
                  Next.js, React.js, TypeScript, Material UI, Node.js,
                  Express.js, PostgreSQL, REST APIs, Git
                </p>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#crmModal"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* CRM MODAL */}
            <div
              className="modal fade"
              id="crmModal"
              tabIndex="-1"
              aria-labelledby="crmModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered mt-5">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="crmModalLabel">
                      CRM Application
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h6 className="fw-bold">
                      Role
                    </h6>
                    <p>
                      Full Stack Developer
                    </p>
                    <h6 className="fw-bold">
                      Project Overview
                    </h6>
                    <p>
                      Developed a CRM platform for managing companies, leads, deals,
                      and customer interactions. Implemented a responsive dashboard,
                      reusable components, CRUD operations, and backend API integration.
                    </p>
                    <h6 className="fw-bold">
                      Key Features
                    </h6>
                    <ul>
                      <li>
                        Company, lead, deal, and ticket management modules
                      </li>
                      <li>
                        Global search across CRM entities
                      </li>
                      <li>
                        Dashboard with analytics and data visualization
                      </li>
                      <li>
                        Reusable data tables with filtering and pagination
                      </li>
                      <li>
                        Form validation and CRUD operations
                      </li>
                      <li>
                        REST API integration with backend services
                      </li>
                    </ul>
                    <h6 className="fw-bold">
                      Technical Implementation
                    </h6>
                    <ul>
                      <li>
                        Built reusable React.js and Next.js components
                      </li>
                      <li>
                        Developed responsive UI using Material UI
                      </li>
                      <li>
                        Created REST APIs using Node.js and Express.js
                      </li>
                      <li>
                        Managed PostgreSQL database operations
                      </li>
                      <li>
                        Implemented search, filtering, and pagination logic
                      </li>
                      <li>
                        Used Git/GitHub for version control
                      </li>
                    </ul>
                    <h6 className="fw-bold">
                      Technologies
                    </h6>
                    <p>
                      Next.js, React.js, TypeScript, Material UI, JavaScript,
                      Node.js, Express.js, PostgreSQL, REST APIs, Git
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h4 className="card-title">
        Royal Mail Web Applications
      </h4>
      <p className="card-text">
        <strong>Role:</strong> Application Developer / L2-L3 Support (CR & Enhancements)
      </p>
      <p className="card-text">
        <strong>Description:</strong><br />
        Worked on enterprise-grade web applications, delivering enhancements,
        production fixes, and application support for business-critical systems.
      </p>
      <p className="card-text">
        <strong>Technologies:</strong> React.js, ASP.NET Core, C#, MSSQL,
        JavaScript, PowerShell, GCP, Git
      </p>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#royalMailModal"
      >
        View Details
      </button>
    </div>
  </div>
  {/* Royal Mail Modal */}
  <div
    className="modal fade"
    id="royalMailModal"
    tabIndex="-1"
    aria-labelledby="royalMailModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered mt-5">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="royalMailModalLabel">
            Royal Mail Web Applications
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <h6 className="fw-bold">
            Role
          </h6>
          <p>
            Application Developer / L2-L3 Support (Change Requests & Enhancements)
          </p>
          <h6 className="fw-bold">
            Project Overview
          </h6>
          <p>
            Worked on multiple enterprise-grade web applications supporting
            Royal Mail business operations. Contributed to application
            enhancements, production support, debugging, and deployment
            activities across different environments.
          </p>
          <h6 className="fw-bold">
            Key Contributions
          </h6>
          <ul>
            <li>
              Implemented business-driven change requests and application enhancements.
            </li>
            <li>
              Developed frontend improvements using React.js and JavaScript.
            </li>
            <li>
              Worked on backend enhancements using ASP.NET Core and C#.
            </li>
            <li>
              Analyzed production issues through debugging, log analysis,
              and root cause investigation.
            </li>
            <li>
              Performed SQL Server database updates and application-level fixes.
            </li>
            <li>
              Supported application testing and deployment activities.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver stable releases.
            </li>
          </ul>
          <h6 className="fw-bold">
            Technical Implementation
          </h6>
          <ul>
            <li>
              Built and enhanced enterprise web application features.
            </li>
            <li>
              Maintained React.js based user interfaces.
            </li>
            <li>
              Developed and modified backend APIs and business logic.
            </li>
            <li>
              Automated operational tasks using PowerShell scripts.
            </li>
            <li>
              Managed deployments for GCP-hosted applications.
            </li>
            <li>
              Used Git workflows for version control and release management.
            </li>
          </ul>
          <h6 className="fw-bold">
            Technologies
          </h6>
          <p>
            React.js, ASP.NET Core, C#, JSON, HTML5, CSS3,
            JavaScript, MSSQL, PowerShell, ServiceNow, GCP, Git
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h4 className="card-title">
        HRMS Application
      </h4>
      <p className="card-text">
        <strong>Role:</strong> Application Developer / Tester
      </p>
      <p className="card-text">
        <strong>Description:</strong><br />
        Developed and enhanced an internal HRMS application to automate
        employee management workflows and improve HR operations.
      </p>
      <p className="card-text">
        <strong>Technologies:</strong>
        ASP.NET Core (C#), MVC Architecture, MSSQL, HTML5, CSS3, JavaScript
      </p>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#hrmsModal"
      >
        View Details
      </button>
    </div>
  </div>
  {/* HRMS Modal */}
  <div
    className="modal fade"
    id="hrmsModal"
    tabIndex="-1"
    aria-labelledby="hrmsModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered mt-5">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="hrmsModalLabel">
            HRMS Application
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>



        <div className="modal-body">
          <h6 className="fw-bold">
            Role
          </h6>
          <p>
            Application Developer / Tester
          </p>
          <h6 className="fw-bold">
            Project Overview
          </h6>
          <p>
            Developed and enhanced a Human Resource Management System (HRMS)
            for Nuroil Trading LLC to automate HR operations including
            employee management, workflow processing, and reporting.
          </p>
          <h6 className="fw-bold">
            Key Contributions
          </h6>
          <ul>
            <li>
              Gathered requirements and implemented HR application features
              based on business needs.
            </li>
            <li>
              Developed application modules for employee management and
              workflow processing.
            </li>
            <li>
              Built backend business logic and database operations using
              ASP.NET Core and MSSQL.
            </li>
            <li>
              Designed and maintained MVC-based application components.
            </li>
            <li>
              Performed functional testing and validated application workflows.
            </li>
            <li>
              Debugged issues and improved application reliability and
              performance.
            </li>
            <li>
              Supported database updates and ensured data accuracy across
              HR modules.
            </li>
          </ul>
          <h6 className="fw-bold">
            Technical Implementation
          </h6>
          <ul>
            <li>
              Developed server-side logic using C# and ASP.NET Core.
            </li>
            <li>
              Managed relational database operations using MSSQL.
            </li>
            <li>
              Implemented MVC architecture for structured application design.
            </li>
            <li>
              Performed testing and debugging across development environments.
            </li>
            <li>
              Used Visual Studio for application development and maintenance.
            </li>
          </ul>
          <h6 className="fw-bold">
            Technologies
          </h6>
          <p>
            ASP.NET Core, C#, MVC Architecture, MSSQL, HTML5, CSS3,
            JavaScript, Visual Studio
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}

export default Projects;
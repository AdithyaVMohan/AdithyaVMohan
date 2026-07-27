import styles from "./Projects.module.css"
function AboutMe() {
    return (
    <div className={styles.outerdiv}>
      <section className="container my-5" id="experience-upcode">

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Summary</h4>

            <p>
                I'm a <b>Full Stack Developer</b> with hands-on experience building modern, responsive web applications using the <b>MERN stack (MongoDB, Express.js, React.js, and Node.js)</b>. I enjoy creating intuitive user interfaces, developing secure RESTful APIs, and delivering scalable end-to-end solutions.
                <br/>
                Before transitioning into full-stack development, I spent over <b>4 years at Accenture</b>, where I gained valuable experience working with enterprise applications, SQL, production support, incident management, and cross-functional teams. This background has strengthened my problem-solving skills and ability to deliver reliable software in fast-paced environments.
                <br/>
                I'm currently based in <b>Sharjah, UAE</b>, with independent work authorisation, and I'm actively seeking <b>Full Stack, MERN Stack, or Frontend Developer</b> opportunities across the UAE.
            </p>

          </div>
        </div>
      </section>
      
      
      <section className="container my-5" id="experience-accenture">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Skills</h4>
            <div className="row g-3">
                <div className="col-12">
                <h5 className="mb-2">Frontend</h5>
                <span className="badge bg-primary me-2 mb-2">React.js</span>
                <span className="badge bg-primary me-2 mb-2">Next.js</span>
                <span className="badge bg-primary me-2 mb-2">TypeScript</span>
                <span className="badge bg-primary me-2 mb-2">JavaScript</span>
                <span className="badge bg-primary me-2 mb-2">HTML5</span>
                <span className="badge bg-primary me-2 mb-2">CSS3</span>
                <span className="badge bg-primary me-2 mb-2">Bootstrap</span>
                <span className="badge bg-primary me-2 mb-2">Material UI</span>
                </div>

                <div className="col-12">
                <h5 className="mb-2">Backend</h5>
                <span className="badge bg-success me-2 mb-2">Node.js</span>
                <span className="badge bg-success me-2 mb-2">Express.js</span>
                <span className="badge bg-success me-2 mb-2">REST APIs</span>
                <span className="badge bg-success me-2 mb-2">JWT Authentication</span>
                <span className="badge bg-success me-2 mb-2">Server-side Validation</span>
                <span className="badge bg-success me-2 mb-2">JSON</span>
                </div>

                <div className="col-12">
                <h5 className="mb-3">Technical Skills</h5>

                {/* Frontend */}
                <div className="mb-3">
                  <h6 className="fw-bold text-primary">Databases</h6>
                  <span className="badge bg-info text-dark me-2 mb-2">MongoDB</span>
                  <span className="badge bg-info text-dark me-2 mb-2">PostgreSQL</span>
                  <span className="badge bg-info text-dark me-2 mb-2">SQL Server</span>
                  <span className="badge bg-info text-dark me-2 mb-2">MySQL</span>
                </div>

                {/* Database */}
                <div className="mb-3">
                  <h6 className="fw-bold text-primary">Tools</h6>
                  <span className="badge bg-info text-dark me-2 mb-2">Git</span>
                  <span className="badge bg-info text-dark me-2 mb-2">GitHub</span>
                  <span className="badge bg-info text-dark me-2 mb-2">Postman</span>
                  <span className="badge bg-info text-dark me-2 mb-2">Confluence</span>
                  <span className="badge bg-info text-dark me-2 mb-2">VS Code</span>
                </div>


                {/* Cloud */}
                <div className="mb-3">
                  <h6 className="fw-bold text-primary">Cloud & Platforms</h6>
                  <span className="badge bg-info text-dark me-2 mb-2">AWS</span>
                  <span className="badge bg-info text-dark me-2 mb-2">GCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container my-5" id="experience-nuroil">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h4 className="card-title">Education</h4>
             <div className="row g-3">

                <div className="col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title">Thejus Engineering College</h5>
                            <p className="card-text">
                            <strong>Degree:</strong> Bachelor of Technology - Computer Science<br />
                            <strong>Duration:</strong> 2015 – 2019<br />
                            <strong>CGPA:</strong> 7.11
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title">Government Polytechnic College, Chelakkara</h5>
                            <p className="card-text">
                            <strong>Diploma:</strong> Hardware Engineering<br />
                            <strong>Duration:</strong> 2013 – 2016<br />
                            <strong>CGPA:</strong> 8.64
                            </p>
                        </div>
                    </div>
                </div>
                </div>

          </div>
        </div>
      </section>
 
    </div>
  );
}

export default AboutMe;
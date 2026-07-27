import styles from "./Projects.module.css"
function Certifications() {
    return (
        <div className={styles.outerdiv}>
            <section className="container my-5" id="certifications">
                <h2 className="mb-4">Certifications</h2>

                <div className="row g-3">

                    <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                        <h5 className="card-title">ITIL® Foundation Certification</h5>
                        <p className="card-text"><strong>Issuing Organization:</strong> PeopleCert</p>
                        <p className="card-text"><strong>Valid:</strong> April 2025 – April 2028</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                        <h5 className="card-title">GitHub Copilot Certification</h5>
                        <p className="card-text"><strong>Issuing Organization:</strong> GitHub</p>
                        <p className="card-text"><strong>Valid:</strong> March 2025 – March 2028</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                        <h5 className="card-title">PL-300: Power BI Data Analyst</h5>
                        <p className="card-text"><strong>Issuing Organization:</strong> Microsoft</p>
                        <p className="card-text"><strong>Valid:</strong> Jan 2025 – Jan 2026</p>
                        </div>
                    </div>
                    </div>

                </div>
                </section>


        </div>
      );
}

export default Certifications;
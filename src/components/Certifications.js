import styles from "./Projects.module.css"
function Certifications() {
    return (
        <div className={styles.outerdiv}>
            <section class="container my-5" id="certifications">
                <h2 class="mb-4">Certifications</h2>

                <div class="row g-3">

                    <div class="col-md-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                        <h5 class="card-title">ITIL® Foundation Certification</h5>
                        <p class="card-text"><strong>Issuing Organization:</strong> PeopleCert</p>
                        <p class="card-text"><strong>Valid:</strong> April 2025 – April 2028</p>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                        <h5 class="card-title">PL-300: Power BI Data Analyst</h5>
                        <p class="card-text"><strong>Issuing Organization:</strong> Microsoft</p>
                        <p class="card-text"><strong>Valid:</strong> Jan 2025 – Jan 2026</p>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                        <h5 class="card-title">GitHub Copilot Certification</h5>
                        <p class="card-text"><strong>Issuing Organization:</strong> GitHub</p>
                        <p class="card-text"><strong>Valid:</strong> March 2025 – March 2028</p>
                        </div>
                    </div>
                    </div>

                </div>
                </section>


        </div>
      );
}

export default Certifications;
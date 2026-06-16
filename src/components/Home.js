import styles from "./Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

function Home() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.sub1}>
        
        {/* IMAGE */}
        <div className={styles.photodiv}>
          <img className={styles.profilephoto} src="/images/adhiss.png" alt="Profile" />
        </div>

        {/* CONTENT */}
        <div className={styles.sub2}>
          
          <div className={styles.myname}>
            <p>ADITHYA V MOHAN</p>
          </div>

          <div className={styles.subtitle}>
            <p>MERN Stack Developer</p>
          </div>

          {/* CONTACT */}
          <div className={styles.contactBox}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon1} />
              <p>ADITHYAVMOHAN@GMAIL.COM</p>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon2} />
              <p>+971 563787981</p>
            </div>
            <div className={styles.contactItem}>
              <a
                href="https://www.linkedin.com/in/adithyavmohan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkin}
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon3} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

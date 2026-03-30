import styles from "./Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

function Home() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.sub1}>
          <div className={styles.photodiv}>
            <img className={styles.profilephoto} src="/images/adhiss.png" alt="Profile"/>
          </div>
          <div className={styles.sub2}>
            <div className={styles.sub3}>
                <div className={styles.myname}>
                  <p>ADITHYA V MOHAN</p>
                </div>
                <div className={styles.subtitle}>
                  <p>MERN Stack Developer</p>
                </div>
                <div className={styles.contactdiv}>
                  <div className={styles.contactdiv}>
                      <div className={styles.emaildiv}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon1} />
                        <p>ADITHYAVMOHAN@GMAIL.COM</p><FontAwesomeIcon icon={faPhone} className={styles.icon2} />
                        <p>+971 563787981</p>
                      </div>
                        <div className={styles.linkin}>
                          <a
                            href="https://www.linkedin.com/in/adithyavmohan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                          >
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon3} />
                            <span className={styles.linkText}>www.linkedin.com/in/adithyavmohan</span>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;

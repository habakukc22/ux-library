import Image from "next/image";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <Logo display />

          <div className={styles.title}>
            <h3>The UX Library</h3>
            <span>Community curated design content & discussion</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.socialmedia}>
              <Image src={facebook} alt="Facebook" width={16} />
              <span>Facebook</span>
              <Image src={twitter} alt="Twitter" width={16} />
              <span>Twitter</span>
            </div>

            <span className={styles.dot}></span>

            <div className={styles.others}>
              <div>
                <span>About</span>
                <span>Contact</span>
                <span>Sign in</span>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <span className={styles.copyright}>
              &copy; 2014 - The UX Library
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import { BsFillHexagonFill } from "react-icons/bs";

import styles from "./Logo.module.css";

function Logo(props) {
  return (
    <div
      className={
        props.display ? `${styles.logo} ${styles.display}` : `${styles.logo}`
      }
    >
      <BsFillHexagonFill />
      <span>UX</span>
    </div>
  );
}

export default Logo;

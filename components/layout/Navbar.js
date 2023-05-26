import { useContext } from "react";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import Image from "next/image";

import Logo from "./Logo";
import Search from "./Search";
import { SearchContext } from "../../context/context";
import styles from "./Navbar.module.css";

function Navbar() {
  const { dispatch } = useContext(SearchContext);

  const clickHandler = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <Link href={"/"} onClick={clickHandler}>
            <Logo />
          </Link>

          <div className={styles.searchbar}>
            <div className={styles.verticalbar} />

            <div className={styles.sort}>
              <div className={styles.horizontalbar} />
              <div className={styles.horizontalbar} />
              <div className={styles.horizontalbar} />
            </div>

            <Search />
          </div>
        </div>

        <div className={styles.rightside}>
          <div className={styles.add}>
            <div className={styles.addbutton}>
              <GoPlus />
            </div>
            <div className={styles.addtext}>Add Post</div>
          </div>

          <div className={styles.picture}>
            <div className={styles.userimage}>
              <span>1</span>
              <Image
                src={"https://i.ibb.co/nPD3GBQ/user1.jpg"}
                alt="user"
                width={44}
                height={44}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

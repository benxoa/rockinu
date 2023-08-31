import { useCallback } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const onABOUTClick = useCallback(() => {
    window.location.href = "about";
  }, []);

  const onTOKENOMICSClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tOKENOMICSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={styles.navbar} id="Nav">
      <button className={styles.home}>HOME</button>
      <button className={styles.about} onClick={onABOUTClick}>
        ABOUT
      </button>
      <button className={styles.tokenomics} onClick={onTOKENOMICSClick}>
        TOKENOMICS
      </button>
      <button className={styles.community}>COMMUNITY</button>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const BottomNav = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/geschiedenis" className={styles.navItem}>Geschiedenis</Link>
      <Link to="/geannuleerd" className={styles.navItem}>Geannuleerd</Link>
      <Link to="/klaar" className={styles.navItem}>Klaar</Link>
      <Link to="/in-behandeling" className={styles.navItem}>In Behandeling</Link>
      <Link to="/voorbereiden" className={styles.navItem}>Voorbereiden</Link>
    </div>
  );
};

export default BottomNav;

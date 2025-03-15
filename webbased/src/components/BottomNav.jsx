import styles from "./styles.module.css";

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = ["Geschiedenis", "Geannuleerd", "Klaar", "In Behandeling", "Voorbereiden"];

  return (
    <div className={styles.navbar}>
      {tabs.map((tab) => (
        <button 
          key={tab} 
          onClick={() => onTabChange(tab)}
          className={`${styles.navItem} ${activeTab === tab ? styles.active : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoBold}>Ibragim</span>
        <span className={styles.logoDot}>.</span>
        <span className={styles.logoLight}>Ast</span>
      </div>
    </header>
  );
}

export default Header;

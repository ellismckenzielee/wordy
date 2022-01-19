import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="open-book.png"></img>

      <h1 className={styles.title}> Wordy </h1>
    </div>
  );
};

export default Header;

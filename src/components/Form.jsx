import styles from "../styles/form.module.css";
import { useState } from "react";
const Form = () => {
  const [word, setWord] = useState("");
  return (
    <div className={styles.form}>
      <form className={styles.inputForm}>
        <label for="word">Please enter a word:</label>
        <input
          onChange={(e) => {
            setWord(e.target.value);
          }}
          id="word"
          className={styles.wordInput}
          type="text"
          value={word}
        ></input>
      </form>
    </div>
  );
};

export default Form;

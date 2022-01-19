import styles from "../styles/form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState({});
  console.log(result);
  return (
    <div className={styles.form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(({ data }) => {
              setResult(data);
            })
            .catch((err) => {
              console.log("Error");
            });
        }}
        className={styles.inputForm}
      >
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
        <button className={styles.submitButton}>Search</button>
      </form>
    </div>
  );
};

export default Form;

import styles from "../styles/form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Form = ({ setResult, setErr }) => {
  const [word, setWord] = useState("");
  return (
    <div className={styles.form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
          axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(({ data }) => {
              setResult(data);
              setErr("");
            })
            .catch((err) => {
              setErr(err.response.data.title);
            });
        }}
        className={styles.inputForm}
      >
        <label htmlFor="word">Please enter a word:</label>
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

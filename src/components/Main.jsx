import Result from "./Result";
import Form from "./Form";
import { useState } from "react";
import styles from "../styles/main.module.css";
const Main = () => {
  const [result, setResult] = useState({});
  const [err, setErr] = useState("");
  console.dir(result);
  return (
    <div className={styles.main}>
      <Form setResult={setResult} setErr={setErr} />
      <Result result={result} err={err} />
    </div>
  );
};

export default Main;

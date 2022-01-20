import Result from "./Result";
import Form from "./Form";
import { useState } from "react";
const Main = () => {
  const [result, setResult] = useState({});
  return (
    <div>
      <Form setResult={setResult} />
      <Result result={result} />
    </div>
  );
};

export default Main;

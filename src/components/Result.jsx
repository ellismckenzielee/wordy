import styles from "../styles/result.module.css";
const Result = ({ result }) => {
  console.log(result);
  if (!Object.keys(result).length) return <></>;
  return (
    <div className={styles.result}>
      <p>foudn sumt</p>
    </div>
  );
};

export default Result;

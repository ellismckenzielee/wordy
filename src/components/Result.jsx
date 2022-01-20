import styles from "../styles/result.module.css";
import DefinitionCard from "./DefinitionCard";
const Result = ({ result, err }) => {
  console.log(result);
  const wordInfo = result[0];
  console.dir(wordInfo);
  if (!Object.keys(result).length) return <></>;

  if (err) {
    return (
      <div className={styles.result}>
        <img className={styles.errorImage} src="warning.png" />
        <h3 className={styles.errorMessage}>{err}</h3>
        <p>Please try another word</p>
      </div>
    );
  }
  const audio = new Audio(wordInfo.phonetics[0].audio);

  return (
    <div className={styles.result}>
      <p>You searched for:</p>
      <h1
        onClick={() => {
          audio.play();
        }}
        className={styles.searchWord}
      >
        {wordInfo.word}
      </h1>
      <h2 className={styles.subHeader}> Origin </h2>
      <p>{wordInfo.origin || "Origin Unknown!"}</p>
      <h2 className={styles.subHeader}>Definitions</h2>

      {wordInfo.meanings.map((meaning, indx1) => {
        return (
          <div key={meaning.toString() + indx1}>
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map((definition, indx2) => {
              return <DefinitionCard key={definition.toString() + indx1 + indx2} definition={definition} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Result;

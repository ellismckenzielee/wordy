import styles from "../styles/result.module.css";
import DefinitionCard from "./DefinitionCard";
const Result = ({ result }) => {
  console.log(result);
  const wordInfo = result[0];
  if (!Object.keys(result).length) return <></>;
  return (
    <div className={styles.result}>
      <p>You searched for:</p>
      <h1>{wordInfo.word}</h1>
      {wordInfo.meanings.map((meaning) => {
        return (
          <div key={meaning.toString()}>
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map((definition, indx) => {
              return <DefinitionCard key={definition.toString() + indx} definition={definition} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Result;

import styles from "../styles/definitionCard.module.css";
const DefinitionCard = ({ definition }) => {
  console.log("def", definition);
  return (
    <div className={styles.definitionCard}>
      <h3 className={styles.definition}>{definition.definition}</h3>
      <p>{definition.example}</p>
    </div>
  );
};

export default DefinitionCard;

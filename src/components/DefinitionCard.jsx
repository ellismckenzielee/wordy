import styles from "../styles/definitionCard.module.css";
const DefinitionCard = ({ definition }) => {
  console.log("def", definition);
  return (
    <div className={styles.definitionCard}>
      <h4 className={styles.definition}>{definition.definition}</h4>
      <p>{definition.example}</p>
    </div>
  );
};

export default DefinitionCard;

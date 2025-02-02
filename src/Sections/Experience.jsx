import styles from "./Sections.module.scss";

export const Experience = () => {
  return (
    <div id="experience" className={styles.experience}>
      <h1>Erfarenhet</h1>

      <div className={styles.jobExperience}>
        <h2>
          <strong>Leklust/Lekia</strong> (2019 - 2024)
        </h2>
        <h3>Som kassaansvarig och säljare lärde jag mig: </h3>
        <ul>
          <li>Att kunna hantera flera uppgifter samtidigt under press </li>
          <li>Lösa problem på ett professionelt sätt</li>
          <li>Att samarbeta med kollegor</li>
          <li>Bra kundbemötande</li>
          <li>Hantering av reklamationer och missnöjda kunder</li>
        </ul>
      </div>

      <div>
        <h2>
          <strong>Rörvikshus</strong>
        </h2>
        <h3>Som marknadsassistentpraktikant lärde jag mig:</h3>
        <ul>
          <li> Kundbemötande, säljteknik och hur man kommunicerar tydligt</li>
        </ul>
      </div>
    </div>
  );
};

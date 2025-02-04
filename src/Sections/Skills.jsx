import styles from "./Sections.module.scss";

export const Skills = () => {
  return (
    <div id="skills" className={styles.skills}>
      <h1>Erfarenheter från utbildning</h1>
      <ul>
        <li>Projektarbete</li>
        <li>Planering och organisering för att effektivt lösa problem</li>
        <li>Laborativt arbete</li>
      </ul>
    </div>
  );
};

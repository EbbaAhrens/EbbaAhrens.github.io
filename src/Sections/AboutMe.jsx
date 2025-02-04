import styles from "./Sections.module.scss";
import { NavButton } from "../Utils/NavButton";

export const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h1>Om mig</h1>
      <h2>Nytänkande, ambitiös och lösningsorienterad</h2>
      <p>
        En tjej som inte är rädd för att tänka utanför boxen. Jag har alltid
        varit väldigt nogrann och bra på att lösa problem snabbt. Min dröm i
        framtiden är att jobba med livsmedel.
      </p>
      <NavButton route={"/personal-letter"} text={"Läs mer om mig här!"} />
    </div>
  );
};

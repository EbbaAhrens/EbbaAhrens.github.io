import { AboutMe } from "../Sections/AboutMe";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Me } from "../Me/Me";
import styles from "./Sections.module.scss";

export const Sections = () => {
  return (
    <div className={styles.container}>

      <div className={styles.aboutMeContainer}>
        <AboutMe />
        <Me />
      </div>

      {/* Other Sections */}
      <div className={styles.sections}>
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
};

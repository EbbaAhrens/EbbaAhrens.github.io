
import { Contact } from "../Contact/Contact";
import { Header } from "../Header/Header";
import { PersonalLetter } from "../PersonalLetter/PersonalLetter";
import styles from "./Pages.module.scss";

export const PersonalLetterPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <PersonalLetter/>
      </div>
      <Contact/>
    </>
  );
};

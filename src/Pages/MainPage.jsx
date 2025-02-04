import { Sections } from "../Sections/Sections";
import { Contact } from "../Contact/Contact";
import { Header } from "../Header/Header";
import styles from "./Pages.module.scss";
import { Sidebar } from "../Sidebar/Sidebar";

export const MainPage = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Sidebar/>
        <Sections />
      </div>
      <Contact/>
    </>
  );
};

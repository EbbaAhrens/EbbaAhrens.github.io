import me from "../assets/me.jpeg";
import styles from "./Me.module.scss";

export const Me = () => {
  return <img className={styles.me} src={me}></img>;
};

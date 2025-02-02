import { CopyToClipboardButton } from "../Utils/CopyToClipboardButton";
import linkedin from "../assets/linkedin.png";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const email = "ahrensebba@gmail.com"
  return (
    <div id="contact" className={styles.contact}>
      <h1>Kontakt</h1>
      <p>Tack för ni tog er tiden att kolla på mitt CV!</p>
      <ul>
        <li>
          {email}
          <CopyToClipboardButton value={email} />
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ebba-ahrens-a4b736191/"
            target="_blank"
          >
            <img className={styles.icons} src={linkedin}></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

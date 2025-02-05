import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  let timeoutId;

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowSidebar(false), 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.sidebar} ${showSidebar ? styles.visible : ""}`}>
      <ul>
        <li onClick={() => handleScrollToSection("about")}>Om mig</li>
        <li onClick={() => handleScrollToSection("experience")}>Erfarenhet</li>
        <li onClick={() => handleScrollToSection("education")}>Utbildning</li>
        <li onClick={() => handleScrollToSection("skills")}>
          Erfarenheter från utbildning
        </li>
        <li onClick={() => handleScrollToSection("contact")}>Kontakt</li>
        <li onClick={(prev) => setShowSidebar(!prev)}>Göm</li>
      </ul>
    </nav>
  );
};

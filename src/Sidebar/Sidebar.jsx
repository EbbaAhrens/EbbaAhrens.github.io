import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        setShowSidebar(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <li onClick={() => setShowSidebar((prev) => !prev)}>Göm</li>
      </ul>
    </nav>
  );
};

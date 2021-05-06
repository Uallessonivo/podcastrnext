import React from "react";
import Toggle from "./Toogle";
import useDarkMode from "use-dark-mode";
import styles from "./styles.module.scss";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={styles.darkModeToggle}>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;

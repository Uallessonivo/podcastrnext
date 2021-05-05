import React from "react";
import styles from "./styles.module.scss";

const Toggle = ({ checked, onChange }) => (
  <span className={styles.toggleControl}>
    <input
      className={styles.dmcheck}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;

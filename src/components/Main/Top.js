import React from "react";
import styles from "./main.module.css";

const Top = (props) => {
  return (
    <>
      <p className={styles.navThe}>The</p>
      <p className={styles.nav}>Mueschke Series</p>

      <h5 className={styles.banner}>{props.title}</h5>
    </>
  );
};

export default Top;

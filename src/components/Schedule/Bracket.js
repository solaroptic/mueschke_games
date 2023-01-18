import React from "react";
import { Link } from "react-router-dom";
import styles from "./schedule.module.css";

export default function Bracket() {
  return (
    <>
      <Link to="/">
        <img src="MueschkeWebLogo2.png" className={styles.escape}></img>
      </Link>
      <div className={styles.schedbackground}>
        <img src="MueschkeSched.jpg" alt="" className={styles.bracket} />
      </div>
      <div className={styles.message}>
        <p className={styles.matchup}>San Francisco vs Chicago</p>
        <p className={styles.matchupInfo}>Around the end of 2022.</p>
        <p className={styles.matchupInfo}>No helmets this time...Flag.</p>
        <p className={styles.matchupInfo}>
          No cleats, gloves or steroids as usual
        </p>
      </div>
      <img
        src="sagePanel.jpg"
        alt="man waiting to attack (defensively)."
        className={styles.sage}
      />
    </>
  );
}

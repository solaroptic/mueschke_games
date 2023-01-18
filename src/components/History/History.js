import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./history.module.css";
import { trophyData, photoData } from "../Main/slideData";
import Top from "../Main/Top";
import History2 from "./History2";
import History1 from "./History1";
// ////////////////////////////////////////////
export default function History() {
  const [choice, setChoice] = useState(2);

  const toggleChoice = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setChoice(id);
  };

  return (
    <>
      <Top title="History" />
      <Link to="/">
        <img src="MueschkeWebLogo2.png" className={styles.escape}></img>
      </Link>
      <div className={styles.grass}>
        <img
          src="historylanding.jpg"
          alt="Old jerseys and a ball"
          className={styles.historylanding}
        />
        <img
          src="historylanding2.jpg"
          alt="Old jerseys and a ball and other football scenes"
          className={styles.historylanding2}
        />
        <div className={styles.historyNav}>
          <a
            id="1"
            className={`${styles.historyMenu} ${choice == 1 && styles.chosen}`}
            onClick={toggleChoice}
          >
            Trophy Case
          </a>
          <span className={styles.historyMenuSpan}> | </span>
          <a
            id="2"
            className={`${styles.historyMenu} ${choice == 2 && styles.chosen}`}
            onClick={toggleChoice}
          >
            The Story
          </a>
          <span className={styles.historyMenuSpan}> | </span>
          <a
            id="3"
            className={`${styles.historyMenu} ${choice == 3 && styles.chosen}`}
            onClick={toggleChoice}
          >
            Classic Photos
          </a>
        </div>
        {choice == 1 && <History1 slides={trophyData} />}
        {choice == 2 && <History2 />}
        {choice == 3 && <History1 slides={photoData} />}
      </div>
    </>
  );
}

import React from "react";
import Bracket from "./Bracket";
import { useState } from "react";
import styles from "./schedule.module.css";
import Message from "./Message";
import Top from "../Main/Top";

export default function Schedule() {
  const [choice, setChoice] = useState(1);

  const toggleChoice = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setChoice(id);
  };
  return (
    <>
      <Top title="Wildcat Games" />
      <div className={styles.scheduleNav}>
        <a
          id="1"
          className={`${styles.scheduleMenu} ${choice == 1 && styles.chosen}`}
          onClick={toggleChoice}
        >
          Schedule
        </a>
        <span className={styles.historyMenuSpan}> | </span>
        <a
          id="2"
          className={`${styles.scheduleMenu} ${choice == 2 && styles.chosen}`}
          onClick={toggleChoice}
        >
          Message Board
        </a>
      </div>
      {choice == 1 && <Bracket />}
      {choice == 2 && <Message />}
    </>
  );
}

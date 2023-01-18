import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ruleData, recordData } from "./ruleData";
import AccordionItem from "./AccordionItem";
import Top from "../Main/Top";
import styles from "./rulesRecords.module.css";

export default function Rules() {
  // accordion stuff
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("cat");
      // note that "0" (str) will NOT be the same as the first child index 0
    }
    setClicked(index);
  };
  // selection stuff
  const [choice, setChoice] = useState(1);

  const toggleChoice = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    setChoice(id);
  };

  return (
    <>
      <Top title="General Info" />
      <Link to="/">
        <img
          src="MueschkeWebLogo2.png"
          className={styles.escape}
          alt="cats playing with ball of yarn"
        ></img>
      </Link>
      <div className={styles.accordion}>
        {choice == 1 && (
          <ul className={styles.accordionChunk}>
            {ruleData.map((rules, index) => (
              <AccordionItem
                key={index}
                rules={rules}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
              />
            ))}
          </ul>
        )}
        {choice == 2 && (
          <ul className={styles.accordionChunk}>
            {recordData.map((rules, index) => (
              <AccordionItem
                key={index}
                rules={rules}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
              />
            ))}
          </ul>
        )}
        <div className={styles.guysDiv}>
          <img src="guys.png" className={styles.guys}></img>
        </div>

        <div className={styles.ruleNav}>
          <a
            id="1"
            className={`${styles.historyMenu} ${
              choice == 1 && styles.ruleChosen
            }`}
            onClick={toggleChoice}
          >
            Rules
          </a>
          <span className={styles.historyMenuSpan}> | </span>
          <a
            id="2"
            className={`${styles.historyMenu} ${
              choice == 2 && styles.ruleChosen
            }`}
            onClick={toggleChoice}
          >
            Records
          </a>
        </div>
      </div>
    </>
  );
}

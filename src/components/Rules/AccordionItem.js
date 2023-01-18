import React, { useRef } from "react";
import styles from "./rulesRecords.module.css";

export default function AccordionItem({ rules, onToggle, active }) {
  ////////// constants////////////////////////////////
  const contentRef = useRef();
  const { title, rule } = rules;

  //////////////jsx///////////////////////////////////
  return (
    <li className={styles.accordionItem}>
      <button
        className={`${styles.accordionBtn} ${active && styles.active}`}
        onClick={onToggle}
      >
        {title}
        <span className={styles.accordionCtrl}>{active ? "-" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={styles.ruleWrap}
        style={
          active
            ? { height: contentRef.current.scrollHeight + 20 }
            : { height: "0px" }
        }
      >
        <div className={styles.rule}>
          <p className={styles.ruleText}>{rule}</p>
        </div>
      </div>
    </li>
  );
}

// const className = ["a", isAdmin ? "b" : ""].join(" ");
// return <button className={className}>...</button>;

import React from "react";
import styles from "./schedule.module.css";

const MessageItem = (props) => {
  return (
    <li className={styles.messageItemContainer}>
      <p className={styles.messageItemName}>{props.name}</p>
      <img src={props.pic} className={styles.avatar}></img>

      <p className={styles.messageItemText}>{props.message}</p>
      <p className={styles.messageItemDate}>{props.date}</p>
    </li>
  );
};

export default MessageItem;

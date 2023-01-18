import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./schedule.module.css";
// import { profiles } from "./profiles";
import AuthContext from "../Main/authContext";
import MessageItem from "./MessageItem";

// ///////////////////////////////////////
// ///////////////////////////////////////
export default function Message() {
  const ctx = useContext(AuthContext);
  const [profileList, setProfileList] = useState(null);
  const [messageChanged, setMessageChanged] = useState(false);
  const pro = "-NIsOTzpor9Mk-tAaGcB";
  // /////temporary sending to firebase
  // /////temporary sending to firebase

  useEffect(() => {
    fetch(`https://mueschke1-default-rtdb.firebaseio.com/profiles/${pro}.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfileList(data);
      });
    setMessageChanged(false);
  }, [messageChanged]);

  // /////temporary updating to firebase
  // /////temporary updating to firebase
  const submitHandler = async (e) => {
    e.preventDefault();
    //////emergency use for profiles upload...
    //////emergency use for profiles upload...
    // const response = await fetch(
    //   "https://mueschke1-default-rtdb.firebaseio.com/profiles/.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(profiles),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const d = new Date();
    // let stamp = d.toISOString().slice(0, 10);
    // date conversion
    let t = new Date();
    let z = t.getTimezoneOffset() * 60 * 1000;
    let tLocal = t - z;
    let tLocal2 = new Date(tLocal);
    let iso = tLocal2.toISOString();
    let iso2 = iso.split(".")[0];
    let iso3 = iso2.replace("T", " at ").slice(5, -3).replace("-", "/");
    let ampm = +iso3.slice(-5, -3) > 11 ? "pm" : "am";
    let stamp = `${iso3}${ampm}`;
    // date conversion
    // const personMsg = ctx.currentUser;
    const changedTo = e.target.msgTxt.value;
    const changeObj = { message: changedTo, date: stamp };
    const response = await fetch(
      `https://mueschke1-default-rtdb.firebaseio.com/profiles/-NIsOTzpor9Mk-tAaGcB/${ctx.currentUser}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(changeObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    e.target.msgTxt.value = "";
    setMessageChanged(true);
  };
  // /////temporary updating to firebase
  // //////////////////////////////////////
  // //////////////////////////////////////
  return (
    <>
      <Link to="/">
        <img src="MueschkeWebLogo2.png" className={styles.escape}></img>
      </Link>
      <form className={styles.addMsg} onSubmit={submitHandler}>
        <input
          type="text"
          name="msgTxt"
          className={styles.addMsgInput}
          placeholder="Update Message..."
          maxLength="140"
        ></input>
        <button type="submit" className={styles.addMsgBtn}>
          Submit
        </button>
      </form>
      <ul className={styles.ulMsg}>
        {profileList &&
          Object.values(profileList).map((value, index) => {
            return (
              <MessageItem
                key={index}
                name={value.called}
                message={value.message}
                pic={value.pic}
                date={value.date}
              />
            );
          })}
      </ul>
    </>
  );
}

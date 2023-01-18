import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./main.module.css";
import Marquee from "react-fast-marquee";
import AuthContext from "./authContext";
import Top from "./Top";

export default function Home() {
  const ctx = useContext(AuthContext);
  console.log(ctx.currentUser);
  return (
    <>
      <Top title="Wildcat Games" />
      <Marquee
        speed="65"
        gradientColor={[255, 255, 255]}
        gradientWidth={"80px"}
        className={styles.gary}
      >
        <p className={styles.newsTicker}>
          Cardinals 68 vs Rams 52....Colts 20 vs Bengals 30....49ers vs Bears
          Next Year....
        </p>
      </Marquee>
      <div className={styles.one}>
        <div className={styles.schedule}>
          <p className={styles.frameTitle}>
            <Link to="/Schedule">Schedule</Link>
          </p>
          <Link to="/Schedule">
            <img
              src="Len2.jpg"
              alt="Kid in uniform posing with ball"
              className={styles.landingPics}
            />
          </Link>
        </div>

        <div className={styles.vault}>
          <p className={styles.frameTitle}>
            <Link to="/Film">Film Vault</Link>
          </p>
          <Link to="/Film">
            <img
              src="patchescatchidkposs.jpg"
              className={styles.landingPics}
              alt="Three guys going for the same pass"
            />
          </Link>
        </div>
        <img
          src="MLogoSmall.png"
          className={styles.landingPicsMain}
          alt="Mueschke shield logo with nine players around it from different scenes"
        />
        <div className={styles.history}>
          <p className={styles.frameTitle}>
            <Link to="/History">History</Link>
          </p>
          <Link to="/History">
            <img
              src="DsoloVI.jpg"
              className={styles.landingPics}
              alt="Man running angrily with ball in field of tall grass"
            />
          </Link>
        </div>

        <div className={styles.rules}>
          <p className={styles.frameTitle}>
            <Link to="/Rules">Game Rules</Link>
          </p>
          <Link to="/Rules">
            <img
              id="Rules"
              src="Tim.jpg"
              className={styles.landingPics}
              alt="Man pulling of bubble-wrap shoulder-pads."
            />
          </Link>
        </div>
      </div>
    </>
  );
}

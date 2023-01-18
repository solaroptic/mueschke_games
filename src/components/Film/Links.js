import React from "react";
import { Link } from "react-router-dom";
import styles from "./film.module.css";
import Top from "../Main/Top";

export default function Links() {
  return (
    <>
      <div className={styles.film}>
        <Top title="Film Vault" />
        <Link to="/">
          <img src="MueschkeWebLogo2.png" className={styles.escape}></img>
        </Link>

        <h2 className={styles.filmHeading}>HIGHLIGHT FILMS</h2>
        <div className={styles.linkAndImageWrapper}>
          <div className={styles.filmLinksWrapper}>
            <a
              href="https://www.youtube.com/watch?v=jdNLwY_Uf3k"
              target="_blank"
              rel="noreferrer"
              className={styles.filmLinks}
            >
              Mueschke XIV
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=jyTLTHGzB68"
              target="_blank"
              rel="noreferrer"
              className={styles.filmLinks}
            >
              Mueschke XIX
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=aZctgaQKTkw"
              target="_blank"
              rel="noreferrer"
              className={styles.filmLinks}
            >
              Mueschke XX
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=OD5sJjAUGbA"
              target="_blank"
              rel="noreferrer"
              className={styles.filmLinks}
            >
              Mueschke Game Frames
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=SHEgPzHtRx0"
              target="_blank"
              rel="noreferrer"
              className={styles.filmLinks}
            >
              Gators vs 'Noles
            </a>
          </div>
          <div className={styles.linksImageWrapper}>
            <img
              src="justinHighlightPage.jpg"
              className={styles.justin}
              alt=""
            />
            <img src="chuy.jpg" className={styles.chuy} alt="" />
          </div>
        </div>
        {/* <!-- include Ravens Oilers Highlights plus compilation of Lions/NFC-AFC/Jets-Pats/SD-NO --> */}
      </div>
    </>
  );
}
